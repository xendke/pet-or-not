import React, { Component } from 'react';
import Clarifai from 'clarifai';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './containers/Main';
//import apiKey from './clarifai/config';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.clarifai = new Clarifai.App({ // initialize the clarifai api
      apiKey: process.env.CLARIFAI_KEY
    });
  }

  render() {    
    return (
      <div>
        <Navbar className="mb-4" color="dark" dark expand="md">
          <NavbarBrand href={`${process.env.PUBLIC_URL}/`}>Pet or Not</NavbarBrand>
        </Navbar>
        <Main clarifai={this.clarifai}/>
        <footer className="footer fixed-bottom pt-3 w-100 text-light bg-dark text-center"> 
          <p>xendke | <a href="https://www.github.com/xendke/pet-or-not">source</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
