import React, {Component} from 'react';
import Pages from './pages.js';
import PageContent from './page_content.js';

const Page = (props) => {
  return (
    <div>
      <PageContent content={props.page}/>
    </div>
  )
}

export default Page