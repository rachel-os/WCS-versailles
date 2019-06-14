import React, { Component } from 'react';
import LightComponent from './Components/LightContainer';
import './App.css';
import NavbarContainer from './Components/NavbarContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LightComponent />
        <NavbarContainer/>
      </div>
    );
  }  
}

export default App;