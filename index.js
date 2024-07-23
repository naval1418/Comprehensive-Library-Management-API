const express = require('express');
var bodyParser = require("body-parser") ;
const app = express();
const database = require('./database');
const port = 4000;
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.get("/", (req, res) => {
     return res.json(database.books);
});

/*
route : /is
description : get a specific book 
access : public 
parameter : isbn
methods : get 
*/
app.get("/is/:isbn", (req,res) => {

         const infobook = database.books.filter(
            (book) => book.ISBN == req.params.isbn 
        );

        if(infobook.length === 0 ){
               res.json({error : `no book found with the ISBN no ${req.params.isbn}`}) ;
        }    
        res.send(infobook) ;
})



/*
route : /c
description : get a specific book 
access : public 
parameter : category
methods : get 
*/
app.get("/c/:Category", (req,res) => {

    const getSpecificBook = database.books.filter(
       (book) => book.category == req.params.Category 
   );

   if(getSpecificBook.length === 0 ){
          res.json({error : `no book found with the Category ${req.params.Category}`}) ;
   }    
   res.send(getSpecificBook) ;
})

/*
route : /author
description : get all the authors
access : public 
methods : get 
*/

app.get("/authors", (req,res) => {
    res.json({authors : database.authors});
})

/*
route : /author
description : get specific author base on id
access : public 
parameter : id
methods : get 
*/

app.get("/authors/:ID", (req,res) => {
    const authors_id = database.authors.filter(aut => aut.id === parseInt(req.params.ID)) ;

    res.json({author : authors_id })
})

/*
route : /publications
description : get all the publications
access : public 
parameter : none
methods : get 
*/


app.get("/publications" , (req,res) => {
    res.json({publications : database.publications})
})

/*
route : /publications
description : get the specific publication based on book
access : public 
parameter : specificbook
methods : get 
*/

app.get("/publications/:specificbook" , (req,res) => {
    const pub = database.publications.filter ( Book => Book.books.includes(req.params.specificbook))
       console.log(pub.length) ;
    res.json({publicaion : pub})
})

// Post method starts (post man is used for the post methords)

/*
route : /book/new
description : add new book
access : public 
parameter : specificbook
methods : post
*/

app.post("/book/new" , (req,res) => {

 const newBook = req.body ;
 
 database.books.push(newBook) ;
 
     res.json({Books  : database.books})

})

/*
route : /author/new
description : add new author
access : public 
parameter : none
methods : post 
*/

app.post("/author/new" , (req,res) => {

    const newAuthor = req.body ;
    database.authors.push(newAuthor) ;
    
        res.json({Authors  : database.authors})
   
   })

   /*
route : /publication/new
description : add new publication
access : public 
parameter : none
methods : post 
*/

app.post("/publication/new" , (req,res) => {

    const newPublication = req.body ;
    database.publications.push(newPublication) ;
    
        res.json({Authors  : database.publications})
   
   })

   // execution of put method 

    /*
route : /publication/update/book/
description : updating books object
access : public 
parameter : none
methods : put 
*/

   app.put("/publication/update/book/:isbn", (req, res) => {
    // Update the publication
    database.publications.forEach((pub) => {
      if (pub.id === req.body.pubId) {
        pub.books.push(req.params.isbn);
      }
    });
  
    // Update the book

    database.books.forEach((book) => {
      if (book.ISBN === req.params.isbn) {
        book.publication = req.body.pubId;
      }
    });
  
    return res.json({
      books: database.books,
      publications: database.publications,
      message: "Successfully executed",
    });
  });



  //Delete method 

    /*
route : /book/delete
description : updating books object
access : public 
parameter : none
methods : Delete 
*/

app.delete("/book/delete/:isbn", (req, res) => {
    const updatedBooks = database.books.filter((book) => {
        return book.ISBN !== req.params.isbn; // Ensure to return a boolean value
    });

    console.log('Updated books list:', updatedBooks);

    database.books = updatedBooks;
    res.json({ books: database.books });
});


/*
route : /book/delete/author
description : deleteing author from the book and vice versa
access : public 
parameter : isbn, authorId
methods : Delete 
*/
app.delete("/book/delete/author/:isbn/:authorId", (req, res) => {
    // Update the book database
    database.books.forEach((book) => {
        if (book.ISBN === req.params.isbn) {
            // If author is not an array, convert it to an array
            if (!Array.isArray(book.author)) {
                book.author = [book.author];
            }
            // Filter out the author ID
            const newAuthorList = book.author.filter(
                (eachAuthor) => eachAuthor !== parseInt(req.params.authorId)
            );
            // Update the book's author list
            book.author = newAuthorList.length > 0 ? newAuthorList : null;  // Set to null if no authors left
        }
    });

    // Update the author database
    database.authors.forEach((eachAuthor) => {
        if (eachAuthor.id === parseInt(req.params.authorId)) {
            const newBookList = eachAuthor.books.filter(
                (book) => book !== req.params.isbn
            );
            eachAuthor.books = newBookList;
        }
    });

    res.json({
        books: database.books,
        authors: database.authors
    });
});


  
  

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});