import React, {Component} from 'react';
import Book from './book.js';
import BookList from '../data/bookList.js';

class Books extends Component {
  constructor (props) {
    super(props);
    this.state = {
      styles: [],
      style: [],
    }
  }
  componentDidMount() {
    fetch('https://raw.githubusercontent.com/openstax/cnx-recipes/master/styles/output/_web-styles.json')
    .then(result => {
      result.json().then(json => this.setState({ styles: json }))
    });
  }

  render() {
    const style = this.state.styles;
    const styleContent = style.map(s => (s.content));

    return (
      <React.Fragment>
      {
        BookList.map((book, index) => (
            <Book key={index} book={book} bookStyle={styleContent}/>
        ))
      }
      </React.Fragment>
    )
  }
}

export default Books
