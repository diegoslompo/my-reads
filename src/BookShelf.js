import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'



class BookShelf extends Component {
  
  static propTypes = {
    bookShelf: PropTypes.array.isRequired,
    onUpdateSection: PropTypes.func.isRequired
  }
  
  render() {
    
    const listShelfsBook = [
      {value : 'currentlyReading',title: 'Currently Reading'},
      {value : 'wantToRead', title: 'Want To Read'},
      {value : 'read', title: 'Read'}
    ]

    const { bookShelf, onUpdateSection } = this.props
 
    return (
        <div className="list-books-content">
          {/* Foreach Array Shelfs conditionals return */}
          {listShelfsBook.map((shelf) => {
            // Filter Shelf, to insert your items
            const bookShelfList = bookShelf.filter((book) => book.shelf === shelf.value) 
            return (
              <div key={shelf.value}>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelf.title}</h2>        
                  <div className="bookshelf-books">
                    <Book shelf={bookShelfList} onUpdate={onUpdateSection} />       
                  </div> 
                </div>
              </div>
            )}
          )}
        </div>
    )
  }
}

export default BookShelf
