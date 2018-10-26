import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function asyncHelper() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

function App() {
  let store = {};
  const [authStatus, updateAuthStatus] = useState(false);

  useEffect(() => {
    asyncHelper().then(() => {
      store = {
        nested: {
          value: 'Hello World',
        },
      }
      // people will assume the store is updated after auth status
      // is true, but it's actually not.
      updateAuthStatus(true);
    });
  });

  if (!authStatus) {
    return <h1>Loading...</h1>
  }

  return (
    // will throw an error here (store hasn't been updated)
    <h1>{store.nested.value}</h1>
  );
}

export default App;
