import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

 
class SearchBooks extends Component {

  state = {
    query: '',
    searchBooks: '',
    searchPage: false
  }

  updateQuery = (query) => {

    this.setState({ query: query })
    this.newBook(query)
  }

  newBook = (query) => {
    if (query) {
      BooksAPI.search(query).then((result) => {
        if(result.length > 0) {
          console.log("entrou")
          this.setState({searchBooks: result, searchPage: true })
         } else {
          console.log("saiu")
          this.setState({searchBooks: '', searchPage: false})
        }
      })

    } else {
      this.setState({searchBooks: '', searchPage: false})
    }
  }


  // search books with the Search Terms
  // searchBooks = (query) => {

  //   let updateSearchedResult = []
  //   if (query) {
  //     BooksAPI.search(query).then((result) => {
  //         // this.updateSearchedResult(result)
  //         updateSearchedResult = (values) => {
  //           for (let value of values) {
  //             for (let book of this.state.books) {
  //               if (value.id === book.id) {
  //                 value.shelf = book.shelf
  //               }
  //             }
  //           }   
  //           this.setState({filteredBooks: values})
  //         }
  //         if (result.error !== 'empty query') {
  //           this.setState({filteredBooks: result})
  //         } else {
  //           this.setState({filteredBooks: []})
  //         }
  //       })
  //   } else {
  //     this.setState({filteredBooks: []})
  //   }
  // }



	render() {
   
    const { onUpdateSection } = this.props
    const { searchPage, searchBooks, query } = this.state

		return (
      <div>
        <div className="search-books-bar">
            
            <Link 
            className="close-search"
            to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <input 
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={(event) => this.updateQuery(event.target.value)}
              />
            </div>
        </div>
        <div className="ds-search__list">
          {( query !== '' &&  searchPage === true) && (
            <Book shelf={searchBooks} onUpdate={onUpdateSection} />
          )}
          {(query === '' || searchPage === false) && (
            <div className="ds-error__not-found">  
                <p className="ds-error--no-happy">;)</p>      
                <p className="ds-error__info">
                  <b>Hello... Search by book or author</b><br/>
                  do your search again or use the terms:
                </p>
                <p className="ds-error__terms">'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'</p>
            </div>
          )}
 
        </div>
      </div>
		)
	}
}

export default SearchBooks

