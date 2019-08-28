import React, {Component} from 'react';
import Page from './page.js';
import { tsConstructorType } from '@babel/types';



class PageContent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      items: [],
      pagecontent: props.content,
    }
  }
  componentDidMount() {
    fetch(this.state.pagecontent)
    .then(result => {
      result.json().then(json => this.setState({ items: json }))
    });
  }
  render() {
    const content =  this.state.items.content;
    return (
      <div dangerouslySetInnerHTML={{__html: content}} />
    )
  }
}

export default PageContent;
