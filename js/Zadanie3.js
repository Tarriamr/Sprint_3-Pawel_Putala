let numer1 = 12;
let numer2 = 3;
let operationType = "/";

let result;

switch (operationType) {
  case "+":
    result = numer1 + numer2;
    break;
  case "-":
    result = numer1 - numer2;
    break;
  case "*":
    result = numer1 * numer2;
    break;
  case "/":
    result = numer1 / numer2;
    break;
  default:
    result = null;
    break;
}

let evenOrOdd = `nieparzysty`;

if (result % 2 === 0) {
  evenOrOdd = `parzysty`;
}

let message = `Wynik operacji ${operationType} to: ${result}, który jest ${evenOrOdd}.`;

if (result === Infinity) {
  message = result;
}

if (result === null) {
  message = `Wybrano nieprawidłową operację`;
}

console.log(message);
