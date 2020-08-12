import React from 'react';
import ReactDOM from 'react-dom';
import { FirebaseAppProvider } from 'reactfire';

import App from './App';
import * as serviceWorker from './serviceWorker';

const firebaseConfig = {
  apiKey: 'AIzaSyBV1lR4HZlvotMVBz5pKSp_ygpjNjEAaAU',
  authDomain: 'soar-v2.firebaseapp.com',
  databaseURL: 'https://soar-v2.firebaseio.com',
  projectId: 'soar-v2',
  storageBucket: 'soar-v2.appspot.com',
  messagingSenderId: '1010170312128',
  appId: '1:1010170312128:web:728e39a700faf1c273c425',
};

ReactDOM.unstable_createRoot(document.getElementById('root')).render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
  </FirebaseAppProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
