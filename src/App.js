import React from 'react';
import './App.css';
import Form from './components/Form'

const api_key = 'AIzaSyB3OKXtCHrZHQOwe6Gs6wf9rPif9vRdCaE'

class App extends React.Component {
  state = {
    books : []
  }
  getBook =async (event)=>{
    //const bookName = event.target.elements.recipeName.value;
    event.preventDefault();
    
   // const api_call = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&filter=ebooks&key=${api_key}`);
    const api_call = await fetch(`https://www.googleapis.com/books/v1/volumes?q=flowers&filter=ebooks&key=${api_key}`);
    const data = await api_call.json() 
    
    this.setState({ books : data.items });
    console.log(this.state.books)

  }
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Book Finder</h1>
      </header>
      <Form getBook={this.getBook}/>
      {this.state.books.map((book) => {
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
  );
}
}
export default App;
