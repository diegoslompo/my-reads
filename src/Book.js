import React, {Component} from 'react'

const options = [
    { value: 'currentlyReading', label: 'Currently read' },
    { value: 'wantToRead', label: 'Want to read' },
    { value: 'read', label: 'Read' },
    { value: 'none', label: 'None' },
]

class BookList extends Component {

  render() {

    const { onUpdate } = this.props

    return (
        <ol className="books-grid">
            {this.props.shelf.map((book) => (
                <li key={book.id}>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                            <select onChange={(event) =>  onUpdate(book, event.target.value)} value={book.shelf}>
                                <option value="move" disabled>Move to...</option>        
                                {options.map((shelf) => (
                                    <option value={shelf.value}>{shelf.label}</option>
                                ))}
                            </select>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.author}</div>
                    </div>
                </li>
            ))}
      </ol> 
    )
  }
}

export default BookList
