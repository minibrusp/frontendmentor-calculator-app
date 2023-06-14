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

  public inputFocusToEnd() {
    this.screen.scrollLeft = this.screen.scrollWidth
    this.screen.setSelectionRange(this.screen.value.length,this.screen.value.length )
  }

  private checkValueIfDotCanBeAdded(value: string) {
    // wtf with the name lol ^^
    if(
        !Number(value.slice(-1)) 
        && value.slice(-1) !== "." 
        && value.slice(-1) !== "0"
      ) {
      return
    }

    if(!value.includes(".")) {
      return this.disPlayButtonToScreen(".")
    }

    if(
      this.screen.value.includes(".") 
      && !Number(value.slice(-1))
      && value.slice(-1) !== "0"
      && value.slice(-1) !== "."
      ||
      value.includes(".")
      && Number(value.slice(-1))
      && value.slice(-1) !== "0"
      && value.slice(-1) !== "."
      ||
      value.includes(".")
      && !Number(value.slice(-1))
      && value.slice(-1) === "0"
      && value.slice(-1) !== "."
    ) return

    this.screen.value = value.replace(".", "")

  }

  addDot() {

    let splitScreenValue = this.screen.value.split(" ")
    this.checkValueIfDotCanBeAdded(splitScreenValue[splitScreenValue.length - 1])
    return this  
  }

  disPlayButtonToScreen(value: string) {
    let newValue = value.replace(/x/g, '*')
    newValue = newValue.replace(",", "")
    if(Number(newValue) || newValue === "0" || newValue === ".") {
      this.screen.value += newValue
      return this
    }
    this.screen.value += ` ${newValue} `
    return this
  }

  delete() {
    this.screen.value = this.screen.value.slice(0, -1) 
    if(this.screen.value[this.screen.value.length - 1] === " "){
      this.screen.value = this.screen.value.slice(0, -1)
    }
    return this
  }

  reset() {
    this.screen!.value = ""
    return this
  }

  calculate() {
    let newValue = this.screen.value.replace(/x/g, '*')
    newValue = newValue.replace(/[,\s]/,"").replace(/[,\s]/,"").replace(/[,\s]/,"").replace(/[,\s]/,"")
    try {
      let result = eval(newValue)
      this.screen.value = result
      
    } catch(err) {
      if(err instanceof SyntaxError) {
        this.screen.value = "Syntax Error"
      }
    }
    
    return this
  }
}