class Calculator {
  add = (num1, num2) => {
    return num1 + num2;
  };

  subtract = (num1, num2) => {
    return num1 - num2;
  };

  multiply = (num1, num2) => {
    return num1 * num2;
  };

  divide = (num1, num2) => {
    return num1 / num2;
  };

  operate = (operator, args) => {
    const splitArgs = args.split(' ');
    console.log(splitArgs);
    return operator(Number(splitArgs[0]), Number(splitArgs[1]));
  };

  displayInput = () => {
    const result = document.querySelector('.calc-result');
    const allButtons = document.querySelectorAll('.calc-buttons');
    let clickResult = '';
    let calcNums = '';
    allButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const calculate = () => {
          if (button.textContent !== 'C' || button.textContent !== '=') {
            if (!/[+\-*/=C]/.test(button.textContent)) {
              clickResult += button.textContent;
              calcNums += button.textContent;
              console.log(calcNums);
            }

            if (button.textContent === 'C') {
              clickResult = '';
              calcNums = '';
              console.log('clear');
            }

            if (button.textContent === '+') {
              clickResult = '';
              calcNums += ' ';
              console.log(calcNums);
            }

            if (button.textContent === '=') {
              clickResult = this.operate(this.add, calcNums);
              calcNums = '';
              calcNums += clickResult;
            }
          }
        };

        calculate();

        result.textContent = clickResult;
      });
    });
  };
}

export default Calculator;
