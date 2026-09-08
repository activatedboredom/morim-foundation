export function cardEntryScale(top: number, viewportHeight: number) {
  if (viewportHeight <= 0) return 1;
  // Fully settled once the card's top reaches the upper fifth of the screen.
  const progress = Math.max(
    0,
    Math.min(1, (viewportHeight - top) / (viewportHeight * 0.8)),
  );
  const eased = progress * progress * (3 - 2 * progress);
  return 0.97 + 0.03 * eased;
}

export function startCardDepth(root: HTMLElement) {
  const cards = Array.from(
    root.querySelectorAll<HTMLElement>('.story-stack > .panel'),
  );
  const enabled = window.matchMedia(
    '(min-width: 701px) and (prefers-reduced-motion: no-preference)',
  );
  let frame: number | undefined;
  const update = () => {
    frame = undefined;
    // Read all geometry before writing styles. A top-center origin keeps these
    // top measurements independent of the scale, avoiding feedback/jitter.
    const scales = cards.map((card) =>
      enabled.matches
        ? cardEntryScale(
            card.getBoundingClientRect().top,
            window.innerHeight,
          ).toFixed(5)
        : '1',
    );
    cards.forEach((card, index) => {
      if (card.style.getPropertyValue('--card-entry-scale') !== scales[index]) {
        card.style.setProperty('--card-entry-scale', scales[index]);
      }
    });
  };
  const schedule = () => {
    if (frame === undefined) frame = requestAnimationFrame(update);
  };
  const onScroll = () => {
    if (enabled.matches) schedule();
  };
  const resize = new ResizeObserver(schedule);
  resize.observe(root);
  cards.forEach((card) => resize.observe(card));
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', schedule);
  enabled.addEventListener('change', schedule);
  update();
  return () => {
    if (frame !== undefined) cancelAnimationFrame(frame);
    resize.disconnect();
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', schedule);
    enabled.removeEventListener('change', schedule);
    cards.forEach((card) => card.style.removeProperty('--card-entry-scale'));
  };
}
