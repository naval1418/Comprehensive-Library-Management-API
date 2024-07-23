const authors = [
    { id: 1, name: "J.K. Rowling", books: ["978-0747532699", "9346124500"] },
    { id: 2, name: "George R.R. Martin", books: ["978-0553103540", "978-0553579901"] },
    { id: 3, name: "J.R.R. Tolkien", books: ["978-0547928227", "978-0618640157"] },
    { id: 4, name: "Isaac Asimov", books: ["978-0553293357", "978-0586010808"] },
    { id: 5, name: "Arthur C. Clarke", books: ["978-0451457998", "978-0345325815"] }
  ];
  
  const books = [
    {
      ISBN: "978-0747532699",
      title: "Harry Potter and the Philosopher's Stone",
      pubDate: "1997-06-26",
      language: "English",
      numOfPages: 223,
      author: 1,
      publication: 1,
      category: "Fantasy"
    },
    {
      ISBN: "9346124500",
      title: "Harry Potter and the Chamber of Secrets",
      pubDate: "1998-07-02",
      language: "English",
      numOfPages: 251,
      author: 1,
      publication: 1,
      category: "Fantasy"
    },
    {
      ISBN: "978-0553103540",
      title: "A Game of Thrones",
      pubDate: "1996-08-06",
      language: "English",
      numOfPages: 694,
      author: 2,
      publication: 2,
      category: "Fantasy"
    },
    {
      ISBN: "978-0553579901",
      title: "A Clash of Kings",
      pubDate: "1998-11-16",
      language: "English",
      numOfPages: 768,
      author: 2,
      publication: 2,
      category: "Fantasy"
    },
    {
      ISBN: "978-0547928227",
      title: "The Hobbit",
      pubDate: "1937-09-21",
      language: "English",
      numOfPages: 310,
      author: 3,
      publication: 3,
      category: "Fantasy"
    },
    {
      ISBN: "978-0618640157",
      title: "The Lord of the Rings",
      pubDate: "1954-07-29",
      language: "English",
      numOfPages: 1216,
      author: 3,
      publication: 3,
      category: "drama"
    },
    {
      ISBN: "978-0553293357",
      title: "Foundation",
      pubDate: "1951-05-01",
      language: "English",
      numOfPages: 255,
      author: 4,
      publication: 4,
      category: "time"
    },
    {
      ISBN: "978-0586010808",
      title: "I, Robot",
      pubDate: "1950-12-02",
      language: "English",
      numOfPages: 253,
      author: 4,
      publication: 4,
      category: "futuristic"
    },
    {
      ISBN: "978-0451457998",
      title: "2001: A Space Odyssey",
      pubDate: "1968-07-01",
      language: "English",
      numOfPages: 297,
      author: 5,
      publication: 5,
      category: "Science_Fiction"
    },
    {
      ISBN: "978-0345325815",
      title: "Rendezvous with Rama",
      pubDate: "1973-08-10",
      language: "English",
      numOfPages: 256,
      author: 5,
      publication: 5,
      category: "action"
    }
  ];
  
  const publications = [
    { id: 1, name: "Bloomsbury", books: ["978-0747532699", "9346124500"] },
    { id: 2, name: "Bantam Books", books: ["978-0553103540", "978-0553579901"] },
    { id: 3, name: "George Allen & Unwin", books: ["978-0547928227", "978-0618640157"] },
    { id: 4, name: "Gnome Press", books: ["978-0553293357", "978-0586010808"] },
    { id: 5, name: "Roc", books: ["978-0451457998", "978-0345325815"] },
    { id: 6, name: "man of steel", books: [] },
  ];


  module.exports= {authors,books,publications} ;