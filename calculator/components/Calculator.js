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
    allButtons.forEach((button) => {
      button.addEventListener('click', () => {
        console.log(button.textContent);
      });
    });
  };
}

export default Calculator;
