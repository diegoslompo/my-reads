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

  updateShelfBooks = (book, event) => {

    let booksChange
    
    this.setState((state) => {
      booksChange = state.books.map((s) => {(s.shelf === book.shelf ? book.shelf = event : '')})
      return booksChange
    })

    //ContactsAPI.remove(contact)
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

        {/*<SearchBooks 
          className="search-books"    
        />*/}

        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>

          <BookShelf onUpdateSection={this.updateShelfBooks} 
            titleSection="Currently Read"
            books={currentlyReadingBooks}
            className="list-books"
          />

          <BookShelf onUpdateSection={this.updateShelfBooks} className="list-books" books={wantToReadBooks} titleSection="Want To Read"/>
          <BookShelf onUpdateSection={this.updateShelfBooks} className="list-books" books={readBooks} titleSection="Read"/>

          <div className="open-search">
            <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
          </div>
        </div>
      </div>
    )
  }
}

export default BooksApp
