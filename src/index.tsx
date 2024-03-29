import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './app/styles/index.css';
import { App } from './app/app';
import firebase from 'firebase/compat';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const Context = createContext({});

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
    <Context.Provider value={{
      firebase,
      auth,
      firestore,
    }}>
      <App />
    </Context.Provider>,
    document.getElementById('root'),
);
