import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

 
class SearchBooks extends Component {

  state = {
    query: '',
    searchBooks: [],
    searchPage: []
  }

  updateQuery = (query) => {


    if (query) {

      let showingBooks
      
      BooksAPI.search(query).then((result) => {
        // console.log(result)
        if(result.length > 0) {
          console.log("entrou")
          const match = new RegExp(escapeRegExp(query), 'i')
          showingBooks = result.filter((book) => (match.test(book.title) || match.test(book.authors)))
          this.setState({searchBooks: showingBooks, searchPage: true })
        } else {
          console.log("saiu")
          this.setState({searchBooks: [], searchPage: false})
        }

      })
    } else {
      this.setState({searchBooks: [], searchPage: false})
    }
    
    // Query Update Value
    this.setState({ query: query.trim() })
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
    const { query, searchBooks } = this.state




		return (
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
          <Book shelf={searchBooks} onUpdate={onUpdateSection} />  

              {/* {searchBooks.map((book) => (
                  <li key={book.id}>
                        <div className="book"> 
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${
                                  book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.smallThumbnail : 'dsAjustar' })` }}></div>
                                <div className="book-shelf-changer">
                                <select >
                                    <option value="move" disabled>Move to...</option>

                                </select>
                                </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                        </div>
                  </li>
                ))} */}
			</div>
		)
	}
}

export default SearchBooks

