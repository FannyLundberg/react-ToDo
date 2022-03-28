import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Todos } from './components/Todos';

function App() {
  return (
    <React.Fragment>
      <header>
        <h1>"Att-göra"-lista</h1>
      </header>
      <main>
        <Todos></Todos>
      </main>
      <footer>©</footer>
    </React.Fragment>
  );
}

export default App;
