import "./styles/index.scss"
import { Calculator } from "./Classes/Calculator"

const form = document.querySelector("form") as HTMLFormElement
const body = document.body as HTMLBodyElement
const calculateBtn = document.querySelector("button.calculate") as HTMLButtonElement
const deleteBtn = document.querySelector("button.delete") as HTMLButtonElement
const resetBtn = document.querySelector("button.reset") as HTMLButtonElement
const dotBtn = document.querySelector("button.dotBtn") as HTMLButtonElement
const normalBtns = document.querySelectorAll("button.normalBtn") as NodeListOf<HTMLButtonElement>
let screen = document.querySelector("input#output") as HTMLInputElement

const MyCalculator = new Calculator(screen, body)

screen.addEventListener('focusout', () => {
  MyCalculator.inputFocusToEnd()
})

form.addEventListener('change', (e: Event) => {
  e.preventDefault()
  let checkedElement = document.querySelector('input[name="theme"]:checked') as HTMLInputElement
  checkedElement.checked = true
  MyCalculator.switchTheme(Number(checkedElement.value))
})

dotBtn.addEventListener("click", () => {
  if(screen.value == "Syntax Error") return
  MyCalculator.addDot().inputFocusToEnd()
})

calculateBtn.addEventListener("click", () => {
  if(screen.value == "Syntax Error") return
  if(screen.value === "") return
  MyCalculator.calculate()
})

deleteBtn.addEventListener("click", () => {
  if(screen.value == "Syntax Error") return
  MyCalculator.delete()
})

resetBtn.addEventListener("click", () => {
  MyCalculator.reset()
})

normalBtns.forEach((normalBtn: HTMLButtonElement) => {
  normalBtn.addEventListener("click", () => {
    if(screen.value == "Syntax Error") return
    MyCalculator.disPlayButtonToScreen(normalBtn.value).inputFocusToEnd()
  })
})




