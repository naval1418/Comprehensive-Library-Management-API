## 1. Overview

<!--
A Library Management System built with Node.js and Express.js.
Features a RESTful API to manage books, authors, and publications.
Supports CRUD operations for efficient library record management.
-->

## 2. Features

<!--
- Books: CRUD operations on books, with attributes like ISBN, title, author, publication, and category.
- Authors: CRUD operations on authors, including managing their books.
- Publications: CRUD operations on publications, including associating books with publications.
- Filtering: Retrieve books by ISBN or category, authors by ID, and publications by book.
-->

## 3. API Endpoints

### Books
1. **`GET /`**: List all books.
2. **`GET /is/:isbn`**: Get a book by ISBN.
3. **`GET /c/:Category`**: Get books by category.
4. **`POST /book/new`**: Add a new book.
5. **`PUT /publication/update/book/:isbn`**: Update book’s publication.
6. **`DELETE /book/delete/:isbn`**: Delete a book.
7. **`DELETE /book/delete/author/:isbn/:authorId`**: Remove an author from a book.

### Authors
1. **`GET /authors`**: List all authors.
2. **`GET /authors/:ID`**: Get an author by ID.
3. **`POST /author/new`**: Add a new author.

### Publications
1. **`GET /publications`**: List all publications.
2. **`GET /publications/:specificbook`**: Get publications by book.
3. **`POST /publication/new`**: Add a new publication.
