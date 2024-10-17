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
