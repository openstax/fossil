import React from 'react';
import PageContent from './page_content.js';

const Page = (props) => {
  return (
    <div>
      <PageContent content={props.page}/>
    </div>
  )
}

export default Page
