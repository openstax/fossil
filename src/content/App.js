import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Book from './components/book.js';
import BookList from './data/bookList.js';

const booksDropdown = {
 }

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      books: BookList,
    }
    this.handleChange = this.handleChange.bind(this);
  };
  handleChange(event) {
    this.setState({});
  }
  render() {
    const data = this.state.books;
    return (
      <div className="container">

        <div className="left-panel">
          <h3>Books</h3>
          <ul style={booksDropdown}>
            <li><a href="anatomy">Anatomy</a></li>
            <li><a href="chemistry">Chemistry</a></li>
          </ul>
          <label>Select a book</label>
          <select >

          </select>
            <button> </button>
        </div>

        <div className="right-panel">
          <BrowserRouter>
          {
            data.map((book, index) => (
              <Route path={book.path}>
                <Book key={index} data={book} />
              </Route>
            ))
          }
          </BrowserRouter>
          </div>
      </div>
    )
  }
}

export default App
