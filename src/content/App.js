import React, {Component} from 'react';
import {Route, NavLink, Link,  BrowserRouter, Switch} from "react-router-dom";

import IndexPage from './components/index_page.js';
import Book from './components/book.js';

import BookList from './data/bookList.js';

const booksDropdown = { 
  "cursor" : "pointer"
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      books: BookList,
      book:[],
      pagesData: [],
      key: "",
      bookName: "",
      indexPage: IndexPage,
    };
    this.handleChange = this.handleChange.bind(this);
    this.BaseState = this.state
    
  };
  handleChange(book) {
    return () => {
      this.setState({
        book: book,
        key: book.key,
        pagesData: book.pages,
        bookName: book.name,
        indexPage: IndexPage,
      });
    }
  }
  //TODO add not found component see https://programmingwithmosh.com/react/react-router-add-the-power-of-navigation/
  //TODO fix paths: how to retreive book with URL (id via url?)
  //TODO 

  render() {
    const books = this.state.books;
    const book = this.state.book;
    const pagesData =this.state.pagesData;
    const bookName = this.state.bookName;
    const indexPage = this.state.indexPage;

    return (
      <div className="container">
        <BrowserRouter>
          <div className="left-panel">
            <h3>Books</h3>
            <ul style={ booksDropdown }>
              <li> <NavLink to="/"   >Font Scale </NavLink></li>
              {
                books.map((book, index) => (
                  <li key={ book.key }>
                    <Link to={ `/book/${book.name}` }  onClick={this.handleChange(book)} >
                      { book.name }
                  </Link>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="right-panel">
            <Switch>
              <Route exact path="/"  component={ indexPage  }/>
              <Route path="/book">
                <Book key={ bookName } bookData={ book } pagesData={ pagesData } />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
