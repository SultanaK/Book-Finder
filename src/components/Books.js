import React from 'react'

const  Books = (props)=> {
<div>
     {props.books.map((book) => {
        return (<div className="result">
              
              <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} /> 
              <p key={book.id}> 
              <b> { book.volumeInfo.title }</b>
              <p> {book.volumeInfo.subtitle}
              <p>Author: {book.volumeInfo.authors}
              { /* <p>Price:{book.volumeInfo.saleInfo.listPrice.amount} */ }
              </p></p></p>
                </div>)
      })}
 </div> 
}

export default Books;