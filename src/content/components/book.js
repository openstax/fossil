import React, {Component} from 'react';
import Pages from './pages.js';

class Book extends Component {
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
      <div className="innerContent" >
        <style>{styleContent}</style>
        <h1>{this.props.bookData.name}</h1>
          <Pages pageData={this.props.pagesData} />
      </div>
    )
  }
}

export default Book
