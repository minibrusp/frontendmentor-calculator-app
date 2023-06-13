export class Calculator {
  constructor(
    private screen: HTMLInputElement,
    private theme: HTMLBodyElement,
  ){}

  switchTheme(value: number) {
    switch(value) {
      case 1:
        this.theme.classList.value = ""
        break
      case 2: 
        this.theme.classList.value = 'second-theme'
        break
      case 3:
        this.theme.classList.value = 'third-theme'
        break
      default: 
        this.theme.classList.value = ""
        break
    }
  }

  addDot() {
    
    if(
        !Number(this.screen.value.slice(-1)) 
        && this.screen.value.slice(-1) !== "." 
        && this.screen.value.slice(-1) !== "0"
      ) {
      return
    }

    if(!this.screen.value.includes(".")) {
      return this.disPlayButtonToScreen(".")
    }
    
    if(
        this.screen.value.includes(".") 
        && !Number(this.screen.value.slice(-1))
        && this.screen.value.slice(-1) !== "0"
        && this.screen.value.slice(-1) !== "."
        ||
        this.screen.value.includes(".")
        && Number(this.screen.value.slice(-1))
        && this.screen.value.slice(-1) !== "0"
        && this.screen.value.slice(-1) !== "."
        ||
        this.screen.value.includes(".")
        && !Number(this.screen.value.slice(-1))
        && this.screen.value.slice(-1) === "0"
        && this.screen.value.slice(-1) !== "."
      ) return

    this.screen.value = this.screen.value.replace(".", "")
    
  }

  disPlayButtonToScreen(value: string) {
    let newValue = value.replace(/X/g, '*')
    newValue = newValue.replace(",", "")
    if(Number(newValue) || newValue === "0" || newValue === ".") {
      return this.screen.value += value
    }
    return this.screen.value += ` ${value} `
  }

  delete() {
    this.screen!.value = this.screen?.value.slice(0, -1)    
  }
  reset() {
    this.screen!.value = ""
  }

  calculate() {
    let newValue = this.screen.value.replace(/X/g, '*')
    newValue = newValue.replace(/[,\s]/,"").replace(/[,\s]/,"").replace(/[,\s]/,"").replace(/[,\s]/,"")
    let result = eval(newValue)
    
    this.screen.value = result
  }
}