let books = [];
let nextId = 1;


function addBook(title) {
     const book = {
       id: nextId,
       title: title,
       status: false
     };
     nextId++;
     books.push(book);
     console.log("Book added: " + title + " " + book.id);
     
}

function printBooks() {
  let num = 0;
    for(let book of books) {
      num++;
        console.log(book.status === false ? num + ". " + book.title + " available" : num + ". " + book.title + " borrowed");
    }
}

function borrowBook(n) {
    const book = books.find(b => b.id === n);
    if(!book) {
      console.log("not available");
    }
    else if(book.status) { 
      console.log("already borrow");
    } else {
    book.status = true;
      console.log("success borrow");
    }
}

function returnBook(id) {
   const book = books.find(b => b.id === id);
   if(!book) {
    console.log("we dont have this book");
   }
   else {   
    console.log("book returned");
    book.status = false;
   }
}

function deleteBook(id) {
    const book = books.find(b => b.id === id);
    if(!book) {
        console.log("no book to remove");
        return;
    } 
    console.log("successfully deleted");
    books = books.filter(b => b.id !== id);
}

addBook("bible")
deleteBook(1)
deleteBook(1)
