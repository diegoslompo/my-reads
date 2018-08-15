import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateSection: PropTypes.func.isRequired
  }

  render() {

    return (
        <div className="list-books-content">
          {/* {this.props.books.map((book) => (
            <h1>{book.title}</h1>
          ))} */}
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.titleSection}</h2>          
                <div className="bookshelf-books">
                  <Book shelf={this.props.books} onUpdate={this.props.onUpdateSection} />       
                </div> 
              </div>
            </div>
        </div>
    )
  }
}

export default BookShelf
