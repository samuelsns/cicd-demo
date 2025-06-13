/**
 * A simple calculator class to demonstrate TDD
 */
export class Calculator {

  validateInput(a: number, b: number){ 
    if(typeof a !== 'number' || typeof b !== 'number'){
      return false;
    }

    return true;
  }


  add(a: number, b: number): string | number { 
    if(!this.validateInput(a, b)){
      return 'Invalid input';
    }


    return a + b;
  }  

  subtract(a: number, b: number): string | number { 
    if(!this.validateInput(a, b)){
      return 'I cant subtract this input';
    }

    return a - b;
  }

  divide(a: number, b: number): string | number { 
    return a / b; // 5 / 0 ->  undefined
  }
}


const calculator = new Calculator();
console.log(calculator.divide(5, 0));