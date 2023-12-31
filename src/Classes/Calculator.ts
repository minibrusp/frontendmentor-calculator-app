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
    let screenValue = this.screen.value.replace(/x/g, '*')
    let newValue = value.replace(/x/g, '*')
    
    newValue = newValue.replace(",", "")    
    
    if(newValue.match(/^([\/\+\-\*])$/) && screenValue.charAt(screenValue.length - 1) === " " ) {
      console.log("Math operators")
      return this
    }

    if(screenValue.charAt(screenValue.length - 1) === ".") {
      this.screen.value += newValue
      return this
    }

    if(isNaN(Number(screenValue.charAt(screenValue.length - 1))) && screenValue.length >= 3) {
      this.screen.value += ` ${newValue}`
      return this
    }
    
    if(Number(newValue) || newValue === "0" || newValue === "." ) {
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
    var splitValue: string[] | undefined = []

    if(newValue.split(" ").length === 1) {
      splitValue = newValue.split("")
    } else {
      splitValue = newValue.split(" ")
    }
    
    if(isNaN(Number(splitValue[splitValue.length - 1]))) return this
    

    if(splitValue[splitValue.length - 1] === "" && splitValue[splitValue.length - 3] !== "") return this


    splitValue = splitValue.map((value, index) => {
      if(index % 2 === 0) {
        let string = `${ parseFloat(splitValue![index].replace(/[,\s]/,"")) }`
        return string
      }
      return value
    })
    
    let joinedValue = splitValue.join("")

    while(newValue.includes(' ') || newValue.includes(",")) {
      newValue = newValue.replace(/[,\s]/,"")
    }

    try {
      let result = eval(joinedValue)
      this.screen.value = result
      
    } catch(err) {
      if(err instanceof SyntaxError) {
        this.screen.value = "Syntax Error"
      }
    }
    
    return this
  }
}