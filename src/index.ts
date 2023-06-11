import "./styles/index.scss"


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



