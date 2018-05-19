import React, { Component } from 'react';
import './App.css';
// import RegisterForm from './Components/RegisterForm';
import RegisterFormWSignIn from './Components/RegisterFormWSignIn';
import '../node_modules/tachyons/css/tachyons.min.css';
// import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="">
      <RegisterFormWSignIn/>
      </div>
    );
  }
}


export default App;
