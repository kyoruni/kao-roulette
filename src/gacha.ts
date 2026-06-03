import { EYES, EYEBROWS, MOUTHS, type Face } from './parts'

function pickRandom<T>(items: readonly T[]): T {
  const index = Math.floor(Math.random() * items.length)
  return items[index]
}

export function spin(): Face {
  return {
    eyebrow: pickRandom(EYEBROWS),
    eye: pickRandom(EYES),
    mouth: pickRandom(MOUTHS),
  }
}
