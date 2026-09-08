type PlayPoof = (x: number, y: number) => number;

type HeroStoryOptions = {
  intro: HTMLElement | null;
  dismissed: boolean;
  onBurst: () => void;
};

export function heroStoryStage(
  scrollY: number,
  introTop: number,
  viewportHeight: number,
  dismissed: boolean,
) {
  if (dismissed || (scrollY > 12 && introTop <= viewportHeight * 0.9))
    return 'dismissed';
  return scrollY > 12 ? 'burst' : 'peek';
}

// A little hysteresis prevents repeated puffs from tiny trackpad movements.
export function heroPoofActive(
  wordCenterY: number,
  viewportHeight: number,
  dismissed: boolean,
  scrollY: number,
) {
  if (scrollY <= 0) return false;
  return wordCenterY <= viewportHeight / 2 + (dismissed ? 12 : 0);
}

export function startHeroPoof(
  hero: HTMLElement,
  onDismissed: (active: boolean) => void,
  play: PlayPoof,
  clear: () => void,
  story?: HeroStoryOptions,
) {
  const accents = hero.querySelector<HTMLElement>('.hero-accents');
  const anchor = hero.querySelector<HTMLElement>('.hero-line');
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  let frame: number | undefined;
  let dismissed = story?.dismissed ?? false;
  let hidden = false;
  let initialized = false;

  const update = () => {
    frame = undefined;
    const rect = anchor?.getBoundingClientRect();
    const stage = story
      ? heroStoryStage(
          window.scrollY,
          story.intro?.getBoundingClientRect().top ?? Infinity,
          window.innerHeight,
          dismissed,
        )
      : null;
    if (stage === 'burst') story?.onBurst();
    const active = story
      ? stage === 'dismissed'
      : rect
        ? heroPoofActive(
            rect.top + rect.height / 2,
            window.innerHeight,
            dismissed,
            window.scrollY,
          )
        : false;
    const focused = Boolean(hero.querySelector('.hero-app-item:focus-visible'));
    const shouldHide = active && (Boolean(story) || !focused);
    if (
      shouldHide &&
      !hidden &&
      initialized &&
      !preference.matches &&
      !document.hidden
    ) {
      // Measure the animated faces, not their stationary button wrappers.
      // Skip a slot if it is between appearances or outside the screen.
      hero.querySelectorAll<HTMLElement>('.hero-app-item').forEach((item) => {
        const bob = item.querySelector<HTMLElement>('.hero-app-bob');
        const face = item.querySelector<HTMLElement>('.hero-app-face') || item;
        const rect = face.getBoundingClientRect();
        const opacity =
          Number(getComputedStyle(face).opacity) *
          (bob ? Number(getComputedStyle(bob).opacity) : 1);
        if (
          opacity > 0.05 &&
          rect.width > 0 &&
          rect.height > 0 &&
          rect.bottom > 0 &&
          rect.top < window.innerHeight &&
          rect.right > 0 &&
          rect.left < window.innerWidth
        ) {
          play(rect.left + rect.width / 2, rect.top + rect.height / 2);
        }
      });
    }
    if (!active || preference.matches || document.hidden) clear();
    hidden = shouldHide;
    hero.dataset.poofed = String(hidden);
    if (accents) accents.inert = hidden;
    if (dismissed !== active || (!initialized && active)) {
      dismissed = active;
      onDismissed(active);
    }
    initialized = true;
  };
  const schedule = () => {
    if (frame === undefined) frame = requestAnimationFrame(update);
  };
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  hero.addEventListener('focusin', schedule);
  hero.addEventListener('focusout', schedule);
  preference.addEventListener('change', schedule);
  document.addEventListener('visibilitychange', schedule);
  update();
  return () => {
    if (frame !== undefined) cancelAnimationFrame(frame);
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', schedule);
    hero.removeEventListener('focusin', schedule);
    hero.removeEventListener('focusout', schedule);
    preference.removeEventListener('change', schedule);
    document.removeEventListener('visibilitychange', schedule);
    if (accents) accents.inert = false;
    delete hero.dataset.poofed;
    clear();
  };
}
