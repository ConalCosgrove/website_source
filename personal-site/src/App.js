import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import linkedin from './images/linkedin.svg';

class App extends Component {
  render() {
    return (

      <div className="App">

        <header className="App-header">
        	<div className="Header-Left">
          		<h1 className="App-title">Conal Cosgrove</h1>
      		</div>
      		<div className="Header-Right">
          <img src = {linkedin} className = "Linkedin"/>
          	</div>
        </header>
        <p className="App-intro">
         
        </p>
      </div>
    );
  }
}

export default App;
