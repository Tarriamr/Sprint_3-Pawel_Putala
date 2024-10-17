// Zadanie 2
// Treść zadania:
// Twoim zadaniem jest stworzenie prostego systemu do zarządzania kolekcją książek w bibliotece. Wszystkie operacje powinny być wykonywane
// korzystając z podstawowych operacji na obiektach i tablicach, a także operacji na stringach i liczbach.
//
// Wymagania:
// 1. Zadeklaruj zmienną library zawierającą obiekt reprezentujący bibliotekę, który zawiera:
//      - name : Nazwa biblioteki jako string.
//      - books: Pusta tablica
// 2. Zadeklaruj obiekty dla trzech książek z kluczami title, author, i yearOfPublication oraz z wybranymi przez siebie danymi.
// 3. Dodaj zadeklarowane obiekty książek do tablicy books w obiekcie library.
// 4. Zadeklaruj zmienne title1 , author1, i yearOfPublication1 dla pierwszej książki z tablicy books, oraz analogicznie dla drugiej i trzeciej książki.
// 5. Zadeklaruj zmienne bookInfo1i utwórz string zawierający informacje o pierwszej książce w formacie:
//      "Tytuł: [title], Autor: [author], Rok wydania: [yearOfPublication].".
// 6. Powtórz krok 3 dla pozostałych książek.
// 7. Zadeklaruj zmienną oldestBook i przypisz do niej tytuł książki o najwcześniejszym roku wydania.
//      W tym celu porównaj wartości yearOfPublication dla wszystkich trzech książek.
// 8. Zadeklaruj zmienną libraryInfo i utwórz string zawierający informacje o bibliotece w formacie:
//      "Biblioteka [nazwa] zawiera książki: [title1], [title2], [title3]. Najstarsza książka: [oldestBook]."

const name = "Dziurawy kocioł";
let books = [];
let library = [name, books];

let book1 = {
  title: "Venom. W otchłani chaosu.",
  author: "Aleksandra Kondraciuk",
  yearOfPublication: 2024,
};
let book2 = {
  title: "Hobbit",
  author: "Tolkien John Ronald Reuel",
  yearOfPublication: 2014,
};
let book3 = {
  title: "Wiedźmin. Oficjalna księga kucharska",
  author: "Anita Sarna , Karolina Krupecka",
  yearOfPublication: 2023,
};
books.push(book1, book2, book3);

let title1 = books[0].title;
let author1 = books[0].author;
let yearOfPublication1 = books[0].yearOfPublication;
let title2 = books[1].title;
let author2 = books[1].author;
let yearOfPublication2 = books[1].yearOfPublication;
let title3 = books[2].title;
let author3 = books[2].author;
let yearOfPublication3 = books[2].yearOfPublication;

let bookInfo1 = `Tytuł: ${book1.title}, Autor: ${book1.author}, Rok wydania: ${book1.yearOfPublication}.`;
let bookInfo2 = `Tytuł: ${book2.title}, Autor: ${book2.author}, Rok wydania: ${book2.yearOfPublication}.`;
let bookInfo3 = `Tytuł: ${book3.title}, Autor: ${book3.author}, Rok wydania: ${book3.yearOfPublication}.`;

let oldestBook =
  yearOfPublication1 < yearOfPublication2
    ? yearOfPublication1 < yearOfPublication3
      ? title1
      : title3
    : yearOfPublication3 < yearOfPublication2
    ? title3
    : title2;

let libraryInfo = `Biblioteka ${name} zawiera książki: "${title1}", "${title2}", "${title3}". Najstarsza książka: "${oldestBook}".`;

console.log(bookInfo1);
console.log(bookInfo2);
console.log(bookInfo3);
console.log(libraryInfo);
