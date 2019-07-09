import React, {Component} from 'react';
import Pages from './pages.js';

class Book extends Component {

  render() {
    const bookStyle = this.props.bookStyle;
    console.log(bookStyle);
    return (
      <div className="innerContent">
      <style jsx>{bookStyle}</style>
      <h1>{this.props.book.name}</h1> 
        <Pages data={this.props.book.pages} />
      </div>
    )
  }
}

export default Book
