import React from 'react';
import Header from './components/Header/Header'
import './App.css';
import Board from './components/Board/Board'

const App = () => {
  return (
    <div className="App">
      <Header></Header>
      <Board></Board>
    </div>
  );
}

export default App;
