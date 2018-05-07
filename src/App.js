import React, { Component } from 'react';
import './App.css';
import RegisterForm from './Components/RegisterForm';
import '../node_modules/tachyons/css/tachyons.min.css';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="">
      <RegisterForm/>
      </div>
    );
  }
}

export default App;
