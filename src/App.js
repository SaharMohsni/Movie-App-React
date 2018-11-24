import React, { Component } from 'react';
import './App.css';
import MoviesContainer from './Components/MoviesContainer'
import 'bootstrap/dist/css/bootstrap.css'


class App extends Component {
  render() {
    return (
      <div className="App">
      <MoviesContainer/>
      </div>
    );
  }
}

export default App;
