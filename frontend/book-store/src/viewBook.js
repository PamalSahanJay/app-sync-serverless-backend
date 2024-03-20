import React from 'react'

const viewBook = (prop) => {
    console.log("view book")
    console.log(prop.books.data.getBookById)
  return (
    // <div>{book.data.getBookById.author}</div>
    <div>
        <h1>Book Title : {prop.books.data.getBookById.title}</h1>
        <h2>Book Author : {prop.books.data.getBookById.author}</h2>
        <h3>Book Price : {prop.books.data.getBookById.price}</h3>
    </div>

  )
}

export default viewBook