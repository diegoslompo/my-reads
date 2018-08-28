import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import {Link} from 'react-router-dom'
import BookShelf from './components/book/BookShelf'
import SearchBooks from './components/search/SearchBooks'
import swal from 'sweetalert2'
import * as BooksAPI from './utils/BooksAPI' 

class BooksApp extends React.Component {

  state = {
    books: [], 
  }

  updateShelfBooks = (book, event) => {

    // set initial books
    const books = this.state.books
    this.setState({
      books
    })

    // return update api
    BooksAPI.update(book, event).then(() => {
      book.shelf = event
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }))

      // spaces to camelCase return shelf
      let shelfSwal = book.shelf.replace(/([A-Z])/g, ' $1').trim()
      swal(
        'Book Moved!',
        'You moved to ' +  shelfSwal,
        'success'
      )
    })
  }

  //get books the server API 
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
   
  render() {

    const {books} = this.state
    
    return (
      <div className="app">

        <Route path='/search' render={({ history }) => (
          <SearchBooks
            onUpdateSection={this.updateShelfBooks}
            books={books}
            className="search-books"
          />
        )}/>

        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>My Reads</h1>
            </div>
            <BookShelf 
              onUpdateSection={this.updateShelfBooks}
              bookShelf={books}
              className="list-books"
            />
            <div className="open-search">
              <Link
                to='/search'> Add a book </Link>
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
