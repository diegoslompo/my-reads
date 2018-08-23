import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import NotificationSearch from './NotificationSearch'
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
    const { searchPage, searchBooks, query } = this.state




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
      <div className="bs-fake">
        <div className={`block ${loading ? 'block--loading' : ''}`}>
          {!loading && data && [
            <img className="block__image" src={data.image} alt={data.alt} />,
            <p className="block__content">{data.content}</p>,
          ]}
        </div>
        <div className={`block ${loading ? 'block--loading' : ''}`}>
          {!loading && data && [
            <img className="block__image" src={data.image} alt={data.alt} />,
            <p className="block__content">{data.content}</p>,
          ]}
        </div>
        <div className={`block ${loading ? 'block--loading' : ''}`}>
          {!loading && data && [
            <img className="block__image" src={data.image} alt={data.alt} />,
            <p className="block__content">{data.content}</p>,
          ]}
        </div>
        <div className={`block ${loading ? 'block--loading' : ''}`}>
          {!loading && data && [
            <img className="block__image" src={data.image} alt={data.alt} />,
            <p className="block__content">{data.content}</p>,
          ]}
        </div>
        <div className={`block ${loading ? 'block--loading' : ''}`}>
          {!loading && data && [
            <img className="block__image" src={data.image} alt={data.alt} />,
            <p className="block__content">{data.content}</p>,
          ]}
        </div>
        <div className={`block ${loading ? 'block--loading' : ''}`}>
          {!loading && data && [
            <img className="block__image" src={data.image} alt={data.alt} />,
            <p className="block__content">{data.content}</p>,
          ]}
        </div>
        <div className={`block ${loading ? 'block--loading' : ''}`}>
          {!loading && data && [
            <img className="block__image" src={data.image} alt={data.alt} />,
            <p className="block__content">{data.content}</p>,
          ]}
        </div>
        <div className={`block ${loading ? 'block--loading' : ''}`}>
          {!loading && data && [
            <img className="block__image" src={data.image} alt={data.alt} />,
            <p className="block__content">{data.content}</p>,
          ]}
        </div>
        <div className={`block ${loading ? 'block--loading' : ''}`}>
          {!loading && data && [
            <img className="block__image" src={data.image} alt={data.alt} />,
            <p className="block__content">{data.content}</p>,
          ]}
        </div>
        <div className={`block ${loading ? 'block--loading' : ''}`}>
          {!loading && data && [
            <img className="block__image" src={data.image} alt={data.alt} />,
            <p className="block__content">{data.content}</p>,
          ]}
        </div>
      </div>
    );

    // FAKE PROD




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
          
          {(query !== '' && searchPage === false) && (
            <ComponentWithSkeletonState {...fakeGraphQLResult} />
          )}
          {( query !== '' &&  searchPage === true) && (
            <Book shelf={searchBooks} onUpdate={onUpdateSection} />
          )}
          {(query === '' && searchPage === false) && (
            <NotificationSearch/>
          )}
          {/* bug do result para contornar
          {(query === '' && searchPage === true) && (
            <div className="ds-error__not-found">  
                <p className="ds-error--no-happy">;)</p>      
                <p className="ds-error__info">
                  <b>Hello... Search by book or author</b><br/>
                  do your search again or use the terms:
                </p>
                <p className="ds-error__terms">'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'</p>
            </div>
          )} */}
 
        </div>
      </div>
		)
	}
}

export default SearchBooks

