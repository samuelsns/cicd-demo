/**
 * A simple calculator class to demonstrate TDD
 */
import { featureFlags } from './feature-flags';

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
    // Check if division feature is enabled
    if (!featureFlags.enableDivision) {
      return 'Division feature is disabled';
    }
    
    // Validate input
    if (!this.validateInput(a, b)) {
      return 'Invalid input for division';
    }
    
    // Check for division by zero
    if (b === 0) {
      return 'Cannot divide by zero';
    }
    
    return a / b;
  }
}

// Example usage
// const calculator = new Calculator();
// console.log(calculator.divide(5, 0));