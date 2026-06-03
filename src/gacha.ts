import { EYES, EYEBROWS, MOUTHS, OPTIONS, type Face } from './parts'

export function pickRandom<T>(items: readonly T[]): T {
  const index = Math.floor(Math.random() * items.length)
  return items[index]
}

export function spin(includeOption = false): Face {
  return {
    eyebrow: pickRandom(EYEBROWS),
    eye: pickRandom(EYES),
    mouth: pickRandom(MOUTHS),
    option: includeOption ? pickRandom(OPTIONS) : undefined,
  }
}
