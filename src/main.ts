import './style.css'
import { spin, pickRandom } from './gacha'
import { EYES, EYEBROWS, MOUTHS, OPTIONS, type Part } from './parts'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
<main class="container">
  <h1>顔ルーレット</h1>
  <label class="toggle">
    <input type="checkbox" id="option-toggle">
    <span>オプション</span>
  </label>
  <div class="face">
    <div class="slot">
      <span class="label">眉</span>
      <span class="name" id="name-eyebrow">？</span>
      <span class="svg" id="svg-eyebrow"></span>
    </div>
    <div class="slot">
      <span class="label">目</span>
      <span class="name" id="name-eye">？</span>
      <span class="svg" id="svg-eye"></span>
    </div>
    <div class="slot">
      <span class="label">口</span>
      <span class="name" id="name-mouth">？</span>
      <span class="svg" id="svg-mouth"></span>
    </div>
    <div class="slot no-svg" id="slot-option" hidden>
      <span class="label">オプション</span>
      <span class="name" id="name-option">？</span>
    </div>
  </div>
  <button id="spin-button" type="button">回す</button>
</main>
`

const eyebrowName = document.querySelector<HTMLSpanElement>('#name-eyebrow')!
const eyeName = document.querySelector<HTMLSpanElement>('#name-eye')!
const mouthName = document.querySelector<HTMLSpanElement>('#name-mouth')!
const eyebrowSvg = document.querySelector<HTMLSpanElement>('#svg-eyebrow')!
const eyeSvg = document.querySelector<HTMLSpanElement>('#svg-eye')!
const mouthSvg = document.querySelector<HTMLSpanElement>('#svg-mouth')!
const optionName = document.querySelector<HTMLSpanElement>('#name-option')!
const optionSlot = document.querySelector<HTMLDivElement>('#slot-option')!
const optionToggle = document.querySelector<HTMLInputElement>('#option-toggle')!
const button = document.querySelector<HTMLButtonElement>('#spin-button')!

function renderSlot(nameEl: HTMLElement, svgEl: HTMLElement, part: Part) {
  nameEl.textContent = part.name
  svgEl.innerHTML = part.svg
}

optionToggle.addEventListener('change', () => {
  optionSlot.hidden = !optionToggle.checked
  if (!optionToggle.checked) {
    optionName.textContent = '？'
  }
})

const SHUFFLE_DURATION_MS = 1200
const SHUFFLE_INTERVAL_MS = 70

button.addEventListener('click', () => {
  button.disabled = true
  const includeOption = optionToggle.checked

  const intervalId = window.setInterval(() => {
    renderSlot(eyebrowName, eyebrowSvg, pickRandom(EYEBROWS))
    renderSlot(eyeName, eyeSvg, pickRandom(EYES))
    renderSlot(mouthName, mouthSvg, pickRandom(MOUTHS))
    if (includeOption) {
      optionName.textContent = pickRandom(OPTIONS)
    }
  }, SHUFFLE_INTERVAL_MS)

  window.setTimeout(() => {
    clearInterval(intervalId)
    const face = spin(includeOption)
    renderSlot(eyebrowName, eyebrowSvg, face.eyebrow)
    renderSlot(eyeName, eyeSvg, face.eye)
    renderSlot(mouthName, mouthSvg, face.mouth)
    if (face.option) {
      optionName.textContent = face.option
    }
    button.disabled = false
  }, SHUFFLE_DURATION_MS)
})
