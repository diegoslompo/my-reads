import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Book from '../book/Book'
import NotificationSearch from '../notification/NotificationSearch'
import ComponentFakeBooks from './ComponentFakeBooks'
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

  newBook = (query) => {

    if (query) {
      BooksAPI.search(query).then((result) => {
        if(this.state.query !== '' && result.length > 0) {
          this.setState({searchBooks: result, searchPage: true })
         } else {
          this.setState({searchBooks: '', searchPage: false})
        }
      })
    } else {
      this.setState({searchBooks: '', searchPage: false})
    }
  }

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

