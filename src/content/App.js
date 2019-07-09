import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Books from './components/books.js';
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
    this.setState({stylesContent: "waka"});
  }
  render() {
    return (
      <div className="container">

        <div className="left-panel">
          <h3>Books</h3>
          <ul style={booksDropdown}>
            <li><a href="Anatomy">Anatomy</a></li>
            <li><a href="Chemistry">Chemistry</a></li>
          </ul>
          <label>Select a book</label>
          <select >

          </select>
            <button> </button>
        </div>

        <div className="right-panel">

            <BrowserRouter>
            <Route path={["/home", "/chemistry", "/anatomy"]} component={Books} />
            </BrowserRouter>
          </div>
      </div>
    )
  }
}

export default App
