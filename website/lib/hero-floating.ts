export const MAX_HERO_FLOATERS = 3;
// Kept in sync with the source catalog by hero-video tests.
export const HERO_VIDEO_COUNT = 6;
export const HERO_DISMISS_MS = 450;
export const heroFloatMotions = [
  { motion: 'bob', driftX: 0, driftY: -4, rock: 0 },
  { motion: 'drift', driftX: 4, driftY: -2, rock: 0 },
  { motion: 'tilt', driftX: 0, driftY: -1, rock: 1.2 },
] as const;

export type HeroFloater = {
  app: number;
  appearance: number;
  kind: 'icon' | 'media';
  preview: number;
  x: number;
  y: number;
  tilt: number;
  driftX: number;
  driftY: number;
  motion: 'bob' | 'drift' | 'tilt';
  rock: number;
  duration: number;
  delay: number;
};

function spawn(
  others: HeroFloater[],
  previous: HeroFloater | undefined,
  appearance: number,
  random: () => number,
): HeroFloater {
  const contentId = (item: HeroFloater) =>
    item.kind === 'media' ? 7 + item.preview : item.app;
  const occupied = new Set(
    [...others, ...(previous ? [previous] : [])].map(contentId),
  );
  const choices = Array.from(
    { length: 7 + HERO_VIDEO_COUNT },
    (_, id) => id,
  ).filter((id) => !occupied.has(id));
  const content = choices[Math.floor(random() * choices.length)];
  // Choose separated positions within the field anchored to “but...”.
  let position = { x: 0.5, y: 0.5 };
  let bestDistance = -1;
  for (let attempt = 0; attempt < 32; attempt++) {
    const candidate = { x: random(), y: random() };
    const distance = Math.min(
      ...[...others, ...(previous ? [previous] : [])].map((item) =>
        Math.hypot(item.x - candidate.x, item.y - candidate.y),
      ),
    );
    if (distance > bestDistance) {
      position = candidate;
      bestDistance = distance;
    }
    if (distance >= 0.36) break;
  }
  return {
    app: content < 7 ? content : 0,
    kind: content < 7 ? 'icon' : 'media',
    preview: content < 7 ? 0 : content - 7,
    appearance,
    ...position,
    tilt: -5 + random() * 10,
    ...heroFloatMotions[Math.floor(random() * heroFloatMotions.length)],
    duration:
      content < 7
        ? 7000 + Math.round(random() * 2500)
        : 18000 + Math.round(random() * 6000),
    delay: 250 + Math.round(random() * 950),
  };
}

export function createHeroFloaters(random = Math.random): HeroFloater[] {
  const items: HeroFloater[] = [];
  for (let slot = 0; slot < MAX_HERO_FLOATERS; slot++) {
    const item = spawn(items, undefined, 8 + slot, random);
    items.push({ ...item, delay: slot * 650 + Math.round(random() * 450) });
  }
  return items;
}

// Two initial peeks, followed by a bounded, non-repeating eight-item burst.
// Only three are video players, keeping the scroll sequence lightweight.
export function createHeroStoryFloaters(random = Math.random): HeroFloater[] {
  const positions = [
    [0.18, 0.78],
    [0.76, 0.88],
    [0.08, 0.3],
    [0.76, 0.15],
    [0.42, 0.62],
    [0.36, 0.08],
    [0.9, 0.5],
    [0.05, 0.02],
  ];
  const apps = [1, 2, 0, 5, 6];
  const previews = [
    random() < 0.5 ? 0 : 1,
    random() < 0.5 ? 3 : 5,
    random() < 0.5 ? 2 : 4,
  ];
  return positions.map(([x, y], slot) => ({
    app: slot < 2 ? apps[slot] : slot > 4 ? apps[slot - 3] : 0,
    appearance: 8 + slot,
    kind: slot >= 2 && slot <= 4 ? 'media' : 'icon',
    preview: slot >= 2 && slot <= 4 ? previews[slot - 2] : 0,
    x,
    y,
    tilt: -5 + random() * 10,
    ...heroFloatMotions[0],
    duration: 700,
    delay: slot < 2 ? slot * 180 : (slot - 2) * 80,
  }));
}

export function replaceHeroFloater(
  items: HeroFloater[],
  slot: number,
  random = Math.random,
) {
  if (!items[slot]) return items;
  const next = spawn(
    items.filter((_, index) => index !== slot),
    items[slot],
    items[slot].appearance + 1,
    random,
  );
  // Replace in place: even while an old item exits, a fourth can't mount.
  return items.map((item, index) => (index === slot ? next : item));
}
