export class Calculator {
  // private screen: HTMLInputElement | undefined
  constructor(
    // public result: string,
    // public num1: number,
    // public num2: number,
    // public operator: string,
    private screen: HTMLInputElement
  ){}

  setScreen(screen: HTMLInputElement) {
    this.screen = screen
  }

  disPlayButtonToScreen(value: string) {
    let newValue = value.replace(/X/g, '*')
    newValue = newValue.replace(",", "")
    if(Number(newValue)) {
      return this.screen.value += value
    }
    return this.screen.value += ` ${value} `
  }

  delete() {
    this.screen!.value = this.screen?.value.slice(0, -1)    
    console.log(this.screen!.value);
  }
  reset() {
    this.screen!.value = ""
  }

  calculate() {
    console.log(this.screen!.value)
    let newValue = this.screen.value.replace(/X/g, '*')
      newValue = newValue.replace(",", "")
    // return eval(text)
    let result = eval(newValue)
    console.log(eval(result))
    
    this.screen.value = eval(result)
  }
}