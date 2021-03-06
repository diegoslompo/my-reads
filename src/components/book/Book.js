import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import StarRatings from 'react-star-ratings'

class BookList extends PureComponent {

  static propTypes = {
    booksOrigin: PropTypes.array.isRequired,
    shelf: PropTypes.array.isRequired,
    onUpdate: PropTypes.func.isRequired
  }

  render() {

    // Options select filter
    const options = [
        { value: 'currentlyReading', label: 'Currently read' },
        { value: 'wantToRead', label: 'Want to read' },
        { value: 'read', label: 'Read' },
        { value: 'none', label: 'None' }
    ]

    // attr props to component
    const { onUpdate, shelf, booksOrigin } = this.props

    return (
        <ol className="books-grid">
            {shelf.map((book) => (
                <li key={book.id}>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${
                                  book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.smallThumbnail : '/images/react.png' })` }}>
                            </div>
                        </div>
                        <div className="book-shelf-changer">
                            <select 
                                onChange={(event) =>  onUpdate(book, event.target.value)}
                                value={booksOrigin.filter((b) => b.id === book.id).reduce((r,book) => book.shelf, 'none')} >
                                <option value="move" disabled>Move to...</option>
                                {options.map((shelf) => (
                                    <option value={shelf.value} key={shelf.value} >{shelf.label}</option>
                                ))}
                            </select>
                        </div>
                        <StarRatings
                            rating={book.averageRating}
                            starDimension="18px"
                            starSpacing="0px"
                        />
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                    </div>
                </li>
            ))}
      </ol> 
    )
  }
}

export default BookList
