import React from 'react';
import Page from './page.js';

const Pages = (props) => {
  const pData  = props.pageData;
  
  return (
    <div>{
     pData.map((page, index) => (
        <Page key={index} page={page} />
      ))
    } 
    </div>
  )
}

export default Pages
