import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom";

import IndexPage from './components/index_page.js';
import Book from './components/book.js';

import BookList from './data/bookList.js';

const booksDropdown = {
  "cursor" : "pointer"
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      books: BookList,
      book:[],
      pagesData: [],
      key: "",
      bookName: ""

    }
    this.handleChange = this.handleChange.bind(this);
  };
  handleChange(book) {
    this.setState({
      book: book,
      key: book.key,
      pagesData: book.pages,
      bookName: book.name,
    });
  }
  render() {
    const books = this.state.books;
    const book = this.state.book;
    const pagesData =this.state.pagesData;
    const bookName = this.state.bookName;
    const key = this.state.key
    ;
    return (
      <div className="container">
        <base href="/"/>
        <HashRouter>
          <div className="left-panel">
            <h3>Books</h3>
            <ul style={ booksDropdown }>
              <li> <a  href="/">Home </a></li>
              {
                books.map((book, index) => (
                  <li key={ book.key }>
                    <a onClick={this.handleChange.bind(null, book)} >
                      {book.name}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="right-panel">
            <Route exact path="/"  component={ IndexPage }/>
            <Route path={ bookName } >
               <Book key={ key } bookData={ book } pagesData={ pagesData } />
            </Route>
          </div>
        </HashRouter>
      </div>
    )

  }
}

export default App
