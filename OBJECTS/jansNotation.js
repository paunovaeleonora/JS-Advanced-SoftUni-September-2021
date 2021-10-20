function solve(arr) {
    let operands = [];
    let operators = [];
   
    for (const ele of arr) {
      if (checkNumberOrNot(ele)) {
        operands.push(ele);
      } else {
        if (operands.length > 1) {
          const operand2 = operands.pop();
          const operand1 = operands.pop();
          let newOperand = calculate(operand1, operand2, ele);
          operands.push(newOperand);
        } else {
          operators.push(ele);
        }
      }
    }
   
    let breakCondition = (operands.length !== operators.length)? "Error: too many operands!" : "Error: not enough operands!";
    return (operands.length === 1 && operators.length == 0)? operands[0]: breakCondition;
   
    function calculate(a, b, op) {
      if (op === '+') {
        return a + b;
      }else if (op === '-') {
        return a - b;
      } else if (op === '*') {
        return a * b;
      } else if (op === '/') {
        return a / b;
      }
    }
   
    function checkNumberOrNot(x) {
      if (typeof x === 'number') {
        return true;
      } else {
        return false;
      }
    }
  }