import React, {Component} from 'react';
import Book from './components/book.js';
import IndexPage from './components/index_page.js';
import BookList from './data/bookList.js';

const booksDropdown = {
  "cursor" : "pointer"
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      books: BookList,
    }
    this.handleChange = this.handleChange.bind(this);
  };
  handleChange(book) {
    this.setState({book: book});
  }
  render() {
    const books = this.state.books;
    return (
      <div className="container">
        <base href="https://archive.cnx.org"/>
        <div className="left-panel">
          <h3>Books</h3>
          <ul style={booksDropdown}>
            {
              books.map((book, index) => (
                <li key={book.key}>
                  <a onClick={this.handleChange.bind(null, book)}>
                    {book.name}
                  </a>
                </li>
              ))
            }
          </ul>
        </div>

        <div className="right-panel">
          {
            this.state.book && <Book key={this.state.book.key} data={this.state.book} />
          }
        </div>
      </div>
    )

  }
}

export default App
