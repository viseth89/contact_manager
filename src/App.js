import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>The App Component</h1>
        <Header branding='lakers are winning kinda'/>
        <Contact name='Viseth' email='viseth89@gmail.com' phone='555-444-8888'/>
        <Contact name='Viseth Sen' email='viseth@gmail.com' phone='555-444-8888'/>

      </div>
    );
  }
}


export default App;
