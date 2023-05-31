// 1
const userNameInput = prompt('Hello user, what is your name?') ?? 'John Doe';
alert(`Hello, ${userNameInput}, How are you?`);

// 2
function isNumber(input) {
  return typeof input == 'number' ? true : false; 
}

function calculate(firstNumber, secondNumber, operator) {

  if(!isNumber(firstNumber) && isNumber(secondNumber)) {
    return 'invalid type';
  }

  switch(operator) {
    case('+'):
      return firstNumber + secondNumber;
    case('-'):
      return firstNumber - secondNumber;
    case('*'):
      return firstNumber * secondNumber;
    case('/'):
      return firstNumber / secondNumber;
    default:
      break;
  }
}

console.log(calculate(1, 2, '+'));

// 3
function areEqual(firstArgument, secondArgument) {
  return firstArgument == secondArgument ? true : false;
}

console.log(areEqual('123', 123));

// 4
function averageOfThree(number1, number2, number3) {
  if(isNumber(number1) && isNumber(number2) && isNumber(number3)) {
    return Math.round((number1 + number2 + number3) / 3);
  } else {
    return 'invalid type';
  }
}

console.log(averageOfThree(5, 6, 7));

// 5
function orginizeNumbersV1(number) {
  if(!isNumber(number)) {
    return 'invalid type';
  }

  output = [];

  while (number) {
    // залишок від поділу на 10 записуємо у масив
    // це остання цифра number
    output.push(number % 10);
    // number ділимо на 10 та округлюємо в меншу сторону
    // тобто відрізаємо останнє число
    number = Math.floor(number/10);
  }
  // після останньої ітерації маємо масив з цифрами числа number у зворотньому порядку
  // перевертаємо масив та склеюємо його в string, та додаємо пробіл
  return output.reverse().join(' ');
}

console.log(orginizeNumbersV1(543265436543));

