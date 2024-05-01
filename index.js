// Існує масив:
const books = [
  { title: "1984", author: "Джордж Оруелл", genre: "Соціальна фантастика", pages: 328 },
  { title: "Колгосп тварин", author: "Джордж Оруелл", genre: "Соціальна фантастика", pages: 286 },
  { title: "Гаррі Поттер і філософський камінь", author: "Дж. К. Роулінг", genre: "Фентезі", pages: 256 },
  { title: "Гаррі Поттер і таємна кімната", author: "Дж. К. Роулінг", genre: "Фентезі", pages: 336 },
  { title: "Гаррі Поттер і в'язень Азкабану", author: "Дж. К. Роулінг", genre: "Фентезі", pages: 448 },
  { title: "Гаррі Поттер і келих вогню", author: "Дж. К. Роулінг", genre: "Фентезі", pages: 608 },
  { title: "Гаррі Поттер і орден Фенікса", author: "Дж. К. Роулінг", genre: "Фентезі", pages: 864 },
  { title: "Гаррі Поттер і Принц-півкров", author: "Дж. К. Роулінг", genre: "Фентезі", pages: 704 },
  { title: "Гаррі Поттер і смертельні реліквії", author: "Дж. К. Роулінг", genre: "Фентезі", pages: 608 },
  { title: "Франкенштейн", author: "Мері Шеллі", genre: "Жахи", pages: 280 },
  { title: "Три товариші", author: "Еріх Марія Ремарк", genre: "Роман", pages: 592 },
  { title: "Матильда", author: "Роальд Даль", genre: "Дитяча література", pages: 240 },
  { title: "Маленький принц", author: "Антуан де Сент-Экзюпери", genre: "Філософська проза", pages: 96 },
  { title: "Триумфальна арка", author: "Еріх Марія Ремарк", genre: "Роман", pages: 515 },
  { title: "Американський психопат", author: "Брет Істон Елліс", genre: "Художній роман", pages: 399 },
  { title: "Коротка історія часу", author: "Стивен Гокінг", genre: "Наукова література", pages: 256 },
  { title: "Заводи", author: "Тед Х'юз", genre: "Історія", pages: 672 },
  { title: "Смерть в Венеції", author: "Томас Манн", genre: "Психологічний роман", pages: 128 },
  { title: "Вікторія", author: "Дейв Ітонс", genre: "Альтернативна історія", pages: 592 },
  { title: "Таємниці Старого Норвегії", author: "Дерек Б. Міллер", genre: "Фентезі", pages: 656 },
  { title: "Дивна смерть", author: "Пол К. Фейр", genre: "Детектив", pages: 384 },
  { title: "Війна майбутнього", author: "Герберт Йенс", genre: "Наукова фантастика", pages: 384 },
  { title: "Думка", author: "Стівен Кінг", genre: "Жахи", pages: 432 },
  { title: "Воно", author: "Стівен Кінг", genre: "Жахи", pages: 502 },
]

// 1) Поверніть перший об'єкт з жанру Роман
let bookGenre = "Роман";

console.log(
  "1) Поверніть перший об'єкт з жанру Роман: \n",
  books.find((book) => book.genre === bookGenre),
  "\n"
);

// 2) Поверніть останній індекс об'єкту з жанру Роман
console.log(
  "2) Поверніть останній індекс об'єкту з жанру Роман: \n",
  books.findLastIndex((book) => book.genre === bookGenre),
  "\n"
);

// 3) Поверніть масив книг з жанром Фентезі де кількість сторінок більше 600
const pagesAmount = 600;
bookGenre = "Фентезі";

console.log(
  "3) Поверніть масив книг з жанром Фентезі де кількість сторінок більше 600: \n",
  books.filter((book) => book.genre === bookGenre && book.pages > pagesAmount),
  "\n"
);

// 4) Поверніть масив з назв книг
console.log(
  "4) Поверніть масив з назв книг: \n",
  books.map((book) => book.title),
  "\n"
);

// 5) Напишіть функцію, яка приймає аргументи: масив книг books, автора і жанр, і повертає масив назв книг (переданого автора і жанру)
const bookAuthor = "Дж. К. Роулінг";
bookGenre = "Фентезі";

/**
 * Функція, яка приймає аргументи: масив книг books, автора і жанр, і повертає масив назв книг (переданого автора і жанру)
 * @param {books[]} books
 * @param {string} author
 * @param {string} genre
 * @returns {books[]}
 */
const findBooksByAuthorAndGenre = function (books, author, genre) {
  return books.filter((book) => book.author === author && book.genre === genre);
};

console.log(
  "5) Напишіть функцію, яка приймає аргументи: масив книг books, автора і жанр, і повертає масив назв книг(переданого автора і жанру): \n",
  "Обраний автор:", bookAuthor, "\n",
  "Обраний жанр:", bookGenre, "\n",
  "Результат роботи функції:", "\n",
  findBooksByAuthorAndGenre(books, bookAuthor, bookGenre), "\n"
);

// 6) Порахуйте кількість книг з жанром Фентезі (треба фільтром отримати новий масив і дістати його довжину)
bookGenre = "Фентезі";

console.log(
  "6) Порахуйте кількість книг з жанром Фентезі (треба фільтром отримати новий масив і дістати його довжину): \n",
  books.filter((book) => book.genre === bookGenre).length,
  "\n"
);

// 7) Порахуйте кількість книг з кількість сторінок від 200 до 400
const pagesAmountMin = 200;
const pagesAmountMax = 400;
console.log(
  "7) Порахуйте кількість книг з кількість сторінок від 200 до 400: \n",
  books.filter(
    (book) => book.pages >= pagesAmountMin && book.pages <= pagesAmountMax
  ).length,
  "\n"
);

// 8) Знайдіть книжку з найменшою кількістю сторінок (треба відсортувати та вивести елемент з індеком 0)
console.log(
  "8) Знайдіть книжку з найменшою кількістю сторінок (треба відсортувати та вивести елемент з індеком 0): \n",
  books.toSorted((book, anotherbook) => book.pages - anotherbook.pages)[0],
  "\n"
);