import React, { Component } from 'react';
import './App.css';
import ButtonOne from '../src/components/ButtonOne'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div> 
          <ButtonOne disable> </ButtonOne>
        </div>
      </div>
    );
  }
}

export default App;
