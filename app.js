function calculate(num1, num2, operation) {
    
  if (num1 == null || num2 == null) {
    // if num1 is empty or num2 is empty then it should return the error 
    return 'One or both numbers are invalid';
  }

  
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    // if type of num1 is empty or num2 is not a number then it should return the error 
    return ' One or both values are not numbers';
  }

  if (!['add', 'subtract', 'multiply', 'divide'].includes(operation)) {
    // if add, subtract, multiply and divide is not included in the opeartion then print the error below
    return ' Invalid operation';
  }

  let result;
  switch (operation) {
    case 'add': 
      result = num1 + num2; // 5 + 3 
      break;    // break will stop the code from executing subsequently and move to the next case
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      
      if (num2 === 0) {
        return 'Division by zero is not allowed'; // if num2 is equal zero
      }
      result = num1 / num2;
      break;
    default:
      return 'Operation not supported';
  }

  return result;
}


console.log(calculate(5, 3, 'add'));       
console.log(calculate(10, 2, 'divide'));    
console.log(calculate(5, null, 'add'));     
console.log(calculate(5, 3, 'modulo'));    
