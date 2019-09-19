import React from 'react';
import ReactDOM from 'react-dom';
import App from './content/App';

import './content/styles/main.scss';

// function changeCSS(cssFile, cssLinkIndex) {

//     var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

//     var newlink = document.createElement("link");
//     newlink.setAttribute("rel", "stylesheet");
//     newlink.setAttribute("type", "text/css");
//     newlink.setAttribute("href", cssFile);

//     document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
// }

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


//serviceWorker.unregister();
