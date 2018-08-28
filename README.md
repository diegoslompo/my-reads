# My Reads Project -  Diego Slompo

This project was developed to present the application for my books in React.js, that should change of shelves according to the selected items in the main page or the search, realizing all the requested requirements.

Requisitos:
* &#x2705; Is it easy to install and start an application?
* &#x2705; Does an application include README with clear installation and startup?
* &#x2705; A main page was three categories ("currently reading", "want to read" and "read")?
* &#x2705; Does a main page allow users to change books on the shelf?
* &#x2705; How is information maintained when page refreshes occur?
* &#x2705; Does a search page have a search entry that allows users to search for books?
* &#x2705; Search results allow a user to categorize a book as "currently reading," "want to read," or "read"?
* &#x2705; How do the selections made on the search page appear on the main page?
* &#x2705; Does a homepage link to the search page?
* &#x2705; A connected search page back to the main page?
* &#x2705; Does the project code handle state management properly?
* &#x2705; Is JSX formatted properly?

Aditional:
* &#x2714; Alert moved book
* &#x2714; Skeleton/Fake loading items

## Getting Started

To get started app my reads:

* Clone the project
* install all project dependencies with `npm install`
* start the development server with `npm start`

## How Use Home Page

* Navigate between books and selected in the `...` icon to choose the shelf you want to change
    * Enter the dates of your stay:
    * Switch off the shelf

* Perform Page Refresh
    * Books must be in their respective selected positions

* In `+` you can perform a search


## How Use Search

* Type a book or author
    * Wait for the results by checking the skeleton and delete to have the search empty with the initial message

#### * Important:
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

Use the terms
```bash
'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.
