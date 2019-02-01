import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
        <Contact name='Viseth' email='viseth89@gmail.com' phone='555-444-8888'/>
        <Contact name='Viseth Sen' email='viseth@gmail.com' phone='555-444-8888'/>
        </div>

      </div>
    );
  }
}


export default App;
