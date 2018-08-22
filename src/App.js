import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import {Link} from 'react-router-dom'
import BookShelf from './BookShelf'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {

  state = {
    books: [],
    // showSearchPage: false
  }

  updateShelfBooks = (book, event) => {

    const books = this.state.books
    this.setState({
      books
    })

    BooksAPI.update(book, event).then(() => {
      book.shelf = event
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }))
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

    // FAKE PROD

    const fakeGraphQLResult = {
      // Change this value to toggle placeholder vs. real content
      loading: true,
      data: {
        image: 'https://www.fillmurray.com/768/400',
        content: '“Nothing prepared me for being this awesome.”',
        alt: 'Bill Murray',
      },
    };
    
    const ComponentWithSkeletonState = ({ loading, data }) => (
      <div className={`block ${loading ? 'block--loading' : ''}`}>
        {!loading && data && [
          <img className="block__image" src={data.image} alt={data.alt} />,
          <p className="block__content">{data.content}</p>,
        ]}
      </div>
    );

    // FAKE PROD
    
    return (
      <div className="app">

        <ComponentWithSkeletonState {...fakeGraphQLResult} />

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
              {/* <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a> */}
            </div>
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
