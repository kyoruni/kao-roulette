import futsumeSvg from './assets/eyes/futsume.svg?raw'
import mihirakiSvg from './assets/eyes/mihiraki.svg?raw'
import jitomeSvg from './assets/eyes/jitome.svg?raw'
import kirakiraSvg from './assets/eyes/kirakira.svg?raw'
import nikkoriSvg from './assets/eyes/nikkori.svg?raw'
import tsumuriSvg from './assets/eyes/tsumuri.svg?raw'
import gyuttoSvg from './assets/eyes/gyutto.svg?raw'

import futsumayuSvg from './assets/eyebrows/futsumayu.svg?raw'
import tsurimayuSvg from './assets/eyebrows/tsurimayu.svg?raw'
import massugumayuSvg from './assets/eyebrows/massugumayu.svg?raw'
import hanojimayuSvg from './assets/eyebrows/hanojimayu.svg?raw'

import nikonikoSvg from './assets/mouths/nikoniko.svg?raw'
import henojiSvg from './assets/mouths/henoji.svg?raw'
import muniSvg from './assets/mouths/muni.svg?raw'
import ochoboSvg from './assets/mouths/ochobo.svg?raw'
import waraiSvg from './assets/mouths/warai.svg?raw'
import massuguguchiSvg from './assets/mouths/massuguguchi.svg?raw'
import omegaSvg from './assets/mouths/omega.svg?raw'
import shikakuSvg from './assets/mouths/shikaku.svg?raw'
import sankakuSvg from './assets/mouths/sankaku.svg?raw'
import iittoSvg from './assets/mouths/iitto.svg?raw'

export type Part = {
  name: string
  svg: string
}

export const EYES: readonly Part[] = [
  { name: '普通目', svg: futsumeSvg },
  { name: '見開き目', svg: mihirakiSvg },
  { name: 'ジト目', svg: jitomeSvg },
  { name: 'キラキラ目', svg: kirakiraSvg },
  { name: 'にっこり目', svg: nikkoriSvg },
  { name: 'つむり目', svg: tsumuriSvg },
  { name: '><', svg: gyuttoSvg },
]

export const EYEBROWS: readonly Part[] = [
  { name: '普通眉', svg: futsumayuSvg },
  { name: 'つり眉', svg: tsurimayuSvg },
  { name: 'まっすぐ眉', svg: massugumayuSvg },
  { name: 'ハの字眉', svg: hanojimayuSvg },
]

export const MOUTHS: readonly Part[] = [
  { name: 'にこにこ口', svg: nikonikoSvg },
  { name: 'への字口', svg: henojiSvg },
  { name: 'むに口', svg: muniSvg },
  { name: 'おちょぼ口', svg: ochoboSvg },
  { name: '笑い口', svg: waraiSvg },
  { name: 'まっすぐ口', svg: massuguguchiSvg },
  { name: 'ω', svg: omegaSvg },
  { name: '四角口', svg: shikakuSvg },
  { name: '△', svg: sankakuSvg },
  { name: 'イーッ', svg: iittoSvg },
]

export const OPTIONS: readonly string[] = [
  'ピース',
  '汗',
  '涙',
  '赤面',
  'パー',
  'グー',
  '口に手を当てる',
]

export type Face = {
  eyebrow: Part
  eye: Part
  mouth: Part
  option?: string
}
