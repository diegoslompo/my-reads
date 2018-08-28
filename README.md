# My Reads Project -  Diego Slompo

Este projeto foi desenvolvido para apresentar o aplicativo para meus livros em React.js, que deve trocar de prateleiras conforme os itens selecionados na pagina principal ou na busca, realizando todas os requisitos solicitados.

Requisitos:
* :white-check-mark: É fácil instalar e iniciar a aplicação?
* :white-check-mark: A aplicação inclui o README, com instruções claras de instalação e inicialização?
* :white-check-mark: A página principal exibe três categorias (ou "estantes") para livros ("currently reading", "want to read" e "read")?
* :white-check-mark: A página principal permite que os usuários mudem os livros de estante?
* :white-check-mark: As informações são mantidas quando ocorrem refreshes de página?
* :white-check-mark: A página de busca tem um input de busca que permite que os usuários procurem por livros?
* :white-check-mark: Os resultados de busca permitem que um usuário categorize um livro como "currently reading", "want to read" ou "read"?
* :white-check-mark: As seleções feitas na página de busca aparecem na página principal?
* :white-check-mark: A página principal conecta-se à página de busca?
* :white-check-mark: A página de busca conecta-se de volta à página principal?
* :white-check-mark: O código do projeto lida com o gerenciamento de estado de forma adequada?
* :white-check-mark: O JSX é formatado de maneira adequada?


## Getting Started

To get started app my reads:

* Clone the project
* install all project dependencies with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.


## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
