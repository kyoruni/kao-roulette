export const EYES = ['丸目', 'ジト目', 'たれ目', 'キラキラ目', '半目'] as const
export const EYEBROWS = ['困り眉', 'つり眉', 'まっすぐ眉', '太眉', 'ハの字眉'] as const
export const MOUTHS = ['にこにこ口', 'への字口', 'むに口', 'おちょぼ口', 'カッ口'] as const

export type Eye = (typeof EYES)[number]
export type Eyebrow = (typeof EYEBROWS)[number]
export type Mouth = (typeof MOUTHS)[number]

export type Face = {
  eye: Eye
  eyebrow: Eyebrow
  mouth: Mouth
}
