import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Book from '../book/Book'
import NotificationSearch from '../notification/NotificationSearch'
import ComponentFakeBooks from './ComponentFakeBooks'
import { debounce } from 'throttle-debounce';
import PropTypes from 'prop-types'
import * as BooksAPI from '../../utils/BooksAPI'

class SearchBooks extends Component {

  state = {
    query: '',
    searchBooks: '',
    fakeItems: 20,
    searchPage: false
  }
  
  static propTypes = {
    searchBooks: PropTypes.array,
    searchPage: PropTypes.bool,
    onUpdateSection: PropTypes.func,
    totalApi: PropTypes.array
  }

  updateQuery = (query) => {
    this.setState({ query: query })
    this.newBook(query)
  }

  newBook = debounce(600,(query) => {  
      if (query) {
        BooksAPI.search(query).then((result) => {
          if( result.length > 0) {
            // set initial books
            const searchBooks = this.props.books
            this.setState({
              searchBooks
            })
            this.setState({searchBooks: result, searchPage: true })

          } else {
            this.setState({searchBooks: '', searchPage: false})
          }
        })
      } else {
        this.setState({searchBooks: '', searchPage: false})
      }
    }
  )

	render() {
    
    const { onUpdateSection } = this.props
    const { searchPage, searchBooks, query, fakeItems} = this.state

    // simulate total API
    const totalApi = [...Array(20).keys()]

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
            <Book 
              shelf={searchBooks}
              onUpdate={onUpdateSection}
              booksOrigin={this.props.books}
            />
          )}
          {(query !== '' && searchPage === false) && (
            <ComponentFakeBooks 
              showApi={totalApi}
              showFake={fakeItems}
            />
          )}
          {(query === '' && searchPage === false) && (
            <NotificationSearch/>
          )}
        </div>
      </div>
		)
	}
}

export default SearchBooks

