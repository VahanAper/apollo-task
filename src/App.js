import React, { Component } from 'react';

import './App.css';
import Header from './components/header';
import Table from './components/table';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header text="Should I eat at McDonalds?" />
        <Table />
      </div>
    );
  }
}

export default App;
