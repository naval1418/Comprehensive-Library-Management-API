const express = require('express');
var bodyParser = require("body-parser") ;
const app = express();
const database = require('./database');
const port = 4000;
app.use(bodyParser.urlencoded({extended: true}));



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

console.log("yet to finish thge work") ;
console.log("hello world") ;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});