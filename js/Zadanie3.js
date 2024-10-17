// Zadanie 3
// Twoim zadaniem jest stworzenie kilku zmiennych przechowujących liczby oraz typ operacji matematycznej.
// Następnie, na podstawie podanych wartości, wykonaj obliczenia i wyświetl odpowiedni komunikat.
//
// Wytyczne:
// 1. Zdefiniuj zmienne:
//      - Stwórz zmienną number1, która będzie przechowywać pierwszą liczbę.
//      - Stwórz zmienną number2, która będzie przechowywać drugą liczbę.
//      - Stwórz zmienną operationType, która będzie przechowywać typ operacji do wykonania (+, -, *, /). Wybierz jedną z nich.
// 2. Oblicz wynik:
//      - Wykorzystując instrukcję warunkową, oblicz wynik wybranej operacji na podstawie wartości zmiennych number1 i number2.
// 3. Sprawdź parzystość wyniku:
//      - Utwórz zmienną evenOrOdd, która będzie przechowywać wartość "parzysty" lub "nieparzysty", w zależności od parzystości wyniku.
// 4. Wyświetl komunikat:
//      - Wykorzystaj template strings do wyświetlenia informacji o parzystości wyniku w formacie:
//          - Wynik operacji + to: 12, który jest parzysty.
//      - Jeśli wartość operationType jest nieprawidłowa, wyświetl komunikat “Wybrano nieprawidłową operację“
//      - Po wykonaniu obliczenia należy sprawdzić czy zwrócony został odpowiedni wynik. Przypadek dzielenia przez 0. Wyświetl wtedy sam wynik operacji.

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
