const operator = prompt('Enter operator(either +,-,* or /)');
const num1 = parseFloat (prompt('Enter first number:  '));
const num2 = parseFloat (prompt('Enter second number:  '));

var result;
switch (operator) {
    case  '+':
        result = num1 + num2
        break;
    case  '-':
        result = num1 - num2
        break;
    case '*':
        result = num1 * num2
        break;
    case '/':
        result = num1 / num2
        break;
    default:
        break;
}

alert(`${num1}  ${operator} ${num2}  = ${result}`)