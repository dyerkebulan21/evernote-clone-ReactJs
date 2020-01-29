import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase')

require('firebase/firestore')

firebase.initializeApp({
  apiKey: "AIzaSyA-BkjrRC2el73S42Zfkg7AdKtPiV59sF4",
  authDomain: "evernote-11c7e.firebaseapp.com",
  databaseURL: "https://evernote-11c7e.firebaseio.com",
  projectId: "evernote-11c7e",
  storageBucket: "evernote-11c7e.appspot.com",
  messagingSenderId: "106225831130",
  appId: "1:106225831130:web:6f4fc2d0ffd1ec124b69e3"

})



ReactDOM.render(<App />, document.getElementById('evernote-tutorial'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
