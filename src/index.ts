import "./styles/index.scss"
import { Calculator } from "./Classes/Calculator"


const form = document.querySelector("form") as HTMLFormElement

const switchThemeClass = (value: number ): void => {
  console.log(value)
  
  switch(value) {
    case 1:
      document.body.classList.value = ""
      break
    case 2: 
      document.body.classList.value = 'second-theme'
      break
    case 3:
      document.body.classList.value = 'third-theme'
      break
    default: 
      document.body.classList.value = ""
      break
  }
}


form.addEventListener('change', (e: Event) => {
  e.preventDefault()

  let checkedElement = document.querySelector('input[name="theme"]:checked') as HTMLInputElement
  checkedElement.checked = true
  switchThemeClass(Number(checkedElement.value))
})

const calculateBtn = document.querySelector("button.calculate") as HTMLButtonElement
const deleteBtn = document.querySelector("button.delete") as HTMLButtonElement
const resetBtn = document.querySelector("button.reset") as HTMLButtonElement
const normalBtns = document.querySelectorAll("button.normalBtn") as NodeListOf<HTMLButtonElement>
let screen = document.querySelector("input#output") as HTMLInputElement

// const MyCalculator = new Calculator()

// calculateBtn.addEventListener("click", (e: Event) => {
//   let value = document.querySelector("input#output") as HTMLInputElement
//   let result = value.value.replace(/X/g, '*');
//   result = result.replace(",", "")
//   let resultArray = result.split(" ")
//   let changeToNumber = (Number(resultArray[0]))

//   if(Number.isNaN(changeToNumber)) return
  
//   result = MyCalculator.calculate(result)
//   value.value = Number(result).toLocaleString("en-US")
// })


const MyCalculator = new Calculator(screen)

calculateBtn.addEventListener("click", () => {
  if(screen.value === "") return
  MyCalculator.calculate()
})

deleteBtn.addEventListener("click", () => {
  MyCalculator.delete()
})

resetBtn.addEventListener("click", () => {
  MyCalculator.reset()
})

normalBtns.forEach((normalBtn: HTMLButtonElement) => {
  normalBtn.addEventListener("click", (e: Event) => {
    console.log(normalBtn.value)
    
    MyCalculator.disPlayButtonToScreen(normalBtn.value)
  })
})



