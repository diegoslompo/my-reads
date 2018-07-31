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
    return (
      <div className="app">

        <SearchBooks 
          className="search-books"
          
        />

        <BookShelf
          className="list-books"
          books={this.state.books}
        />

      </div>
    )
  }
}

export default BooksApp
