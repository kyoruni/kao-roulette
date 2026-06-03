import './style.css'
import { spin } from './gacha'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
<main class="container">
  <h1>顔ルーレット</h1>
  <div class="face">
    <div class="slot">
      <span class="label">眉</span>
      <span class="value" id="value-eyebrow">？</span>
    </div>
    <div class="slot">
      <span class="label">目</span>
      <span class="value" id="value-eye">？</span>
    </div>
    <div class="slot">
      <span class="label">口</span>
      <span class="value" id="value-mouth">？</span>
    </div>
  </div>
  <button id="spin-button" type="button">回す</button>
</main>
`

const eyebrowEl = document.querySelector<HTMLSpanElement>('#value-eyebrow')!
const eyeEl = document.querySelector<HTMLSpanElement>('#value-eye')!
const mouthEl = document.querySelector<HTMLSpanElement>('#value-mouth')!
const button = document.querySelector<HTMLButtonElement>('#spin-button')!

button.addEventListener('click', () => {
  const face = spin()
  eyebrowEl.textContent = face.eyebrow
  eyeEl.textContent = face.eye
  mouthEl.textContent = face.mouth
})
