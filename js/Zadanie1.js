// Zadanie 1:
// Treść zadania:
//
//     Twoim zadaniem jest stworzenie kilku zmiennych przechowujących dane o użytkowniku oraz wykonanie na nich operacji, tak aby finalnie wyświetlić spersonalizowany komunikat.
//     Wytyczne:
//
// Stwórz zmienną userName przechowującą imię użytkownika, zapisane z małej litery.
//     Stwórz zmienną userAge przechowującą wiek użytkownika.
//     Stwórz zmienną likesJavaScript przechowującą informację, czy użytkownik lubi JavaScript (wartość logiczna).
//     Stwórz zmienną userHobby przechowującą hobby użytkownika.
//     Stwórz zmienną userCity przechowującą miasto, w którym mieszka użytkownik.
//     Stwórz zmienną przechowującą poprawione imię użytkownika, tak aby zaczynało się z wielkiej litery, a pozostałe były małe.
//     Stwórz zmienną w, której przechowasz wiek użytkownika za 10 lat.
//     Zapisz do zmiennej wynik sprawdzenia czy użytkownik jest pełnoletni.

//     Stwórz zmienną przechowującą informację, czy użytkownik mieszka w Warszawie: isWarsawCitizen.
//     Używając operatorów logicznych, stwórz zmienną likesJSAndIsAdult przechowującą wartość logiczną, czy użytkownik jest pełnoletni i lubi JavaScript.
//     Stwórz zmienną message przechowującą komunikat powitalny, zawierający imię i wiek użytkownika oraz  informację o pełnoletności. Np. “Cześć Roman. Masz 20 lat. Jesteś pełnoletni.“
// Jeśli użytkownik lubi JavaScript, dodaj do komunikatu informację, że lubi JavaScript.
//     Jeśli użytkownik mieszka w Warszawie, dodaj do komunikatu informację o miejscu zamieszkania.
//     Na końcu dodaj do komunikatu informację o hobby użytkownika.

const userName = "adam";
const userAge = 30;
const likesJavaScript = true;
const userHobby = "football";
const userCity = "Warszawa";

let correctedUserName = `${userName.charAt(0).toUpperCase()}${userName.slice(
  1
)}`;

let newUserAge = userAge + 10;

let adult = userAge >= 18 ? true : false;

let isWarsawCitizen = userCity === "Warszawa" ? true : false;

let likesJSAndIsAdult = [likesJavaScript, adult];

let message = `Cześć ${correctedUserName}. Masz ${userAge} lat. Jesteś ${
  adult ? "pełnoletni" : "nie pełnoletni"
}.`;

message += ` ${likesJavaScript ? "Lubisz" : "Nie lubisz"} JavaScript.`;

message += `${isWarsawCitizen ? " Mieszkasz w Warszawie." : ""}`;

message += ` Twoje hobby to ${userHobby}.`;

console.log(message);
