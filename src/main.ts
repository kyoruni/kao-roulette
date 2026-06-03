import './style.css'
import { spin } from './gacha'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
<main class="container">
  <h1>顔ルーレット</h1>
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
const button = document.querySelector<HTMLButtonElement>('#spin-button')!

button.addEventListener('click', () => {
  const face = spin()
  eyebrowName.textContent = face.eyebrow.name
  eyeName.textContent = face.eye.name
  mouthName.textContent = face.mouth.name
  eyebrowSvg.innerHTML = face.eyebrow.svg
  eyeSvg.innerHTML = face.eye.svg
  mouthSvg.innerHTML = face.mouth.svg
})
