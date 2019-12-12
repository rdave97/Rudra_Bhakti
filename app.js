var express = require('express')
var app = express()
'use strict';

const fs = require('fs');

let data = fs.readFileSync('user.json');
let user = JSON.parse(data);
console.log(user);

app.get('/', function (resquest, response){
    response.send("Internet Computing is the best subject")
})

app.get('/users', function (resquest, response){
    response.end(JSON.stringify(user))
})

app.get('/users/:id/books', function (resquest, response){
    var id = resquest.params.id
    console.log(user["user"+id]);
    const userDtls = user["user"+id];
    const books = userDtls.books;
    console.log(books);
    response.end(JSON.stringify(books));
   // response.send["users"+resquest.params.id]
    

})

app.get('/users/:id', function (resquest, response){
    var users = JSON.parse(data)
    var user = users["user"+resquest.params.id]

    response.end(JSON.stringify(user))
})
app.get('/users/:id/books/:bookId', function (resquest, response){
    var id = resquest.params.id;
    var bookId = resquest.params.bookId;
    console.log("This is home",id, bookId);

    
    const userDtls = user["user"+id];
    const books = userDtls.books;
    const bookName = books[bookId.toString()];
    if(bookName){
        response.end(bookName);
    }else{
        response.end("No Book for this id");
    }
    
})
app.listen(3000, function(){
    console.log("server has been started")
})