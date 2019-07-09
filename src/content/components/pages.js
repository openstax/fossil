import React, {Component} from 'react';
import Page from './page.js';

const Pages = (props) => {
  return (
    <div>{
      props.data.map((page, index) => (
        <Page key={index} page={page} />
      ))
    } 
    </div>
  )
}

export default Pages
