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

  operate = (operator, num1, num2) => {
    return operator(num1, num2);
  };

  displayInput = () => {
    const result = document.querySelector('.calc-result');
    const allButtons = document.querySelectorAll('.calc-buttons');
    let clickResult = '';
    allButtons.forEach((button) => {
      button.addEventListener('click', () => {
        if (button.textContent !== 'C' || button.textContent !== '=') {
          if (!/[+\-*/=C]/.test(button.textContent)) clickResult += button.textContent;
          if (button.textContent === 'C') clickResult = '';
          if (button.textContent === '+') {
            const firstNum = clickResult;
            clickResult = '';
            if (!/[+\-*/=C]/.test(button.textContent)) {
              clickResult += button.textContent;
              const secondNum = clickResult;
              console.log('first: ', firstNum, 'second: ', secondNum);

              // find out how to assign secondNum a value after clicking on an operator like '+'
            }
          }
        }

        result.textContent = clickResult;
      });
    });
  };
}

export default Calculator;
