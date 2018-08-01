import React from 'react'
import './App.css'
import BookShelf from './BookShelf'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {

  state = {
    books: [],
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  
  
  render() {

    let currentlyReadingBooks =  this.state.books.filter(book => {
      if(book.shelf === "currentlyReading")
        return book
    })
    let wantToReadBooks =  this.state.books.filter(book => {
      if(book.shelf === "wantToRead")
        return book
    })
    let readBooks =  this.state.books.filter(book => {
      if(book.shelf === "read")
        return book
    })

    return (
      <div className="app">

        <SearchBooks 
          className="search-books"    
        />

        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          
          <BookShelf className="list-books" books={currentlyReadingBooks} titleSection="Currently Read"/>
          <BookShelf className="list-books" books={wantToReadBooks} titleSection="Want To Read"/>
          <BookShelf className="list-books" books={readBooks} titleSection="Read"/>

          <div className="open-search">
            <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
          </div>
        </div>
      </div>
    )
  }
}

export default BooksApp
