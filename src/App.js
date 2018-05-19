import React, { Component } from 'react';
import './App.css';
// import RegisterForm from './Components/RegisterForm';
// import RegisterFormWSignIn from './Components/RegisterFormWSignIn';
// import SignIn from './Components/SignIn';
// import KeepYourAccSafe from './Components/KeepYourAccSafe';
// import ReEnterCode from './Components/ReEnterCode';
import WelcomeLogo from './Components/WelcomeLogo';
import '../node_modules/tachyons/css/tachyons.min.css';

class App extends Component {
  render() {
    return (
      <div className="">
        {/* <RegisterForm/> */}
        {/* <RegisterFormWSignIn/> */}
        {/* <SignIn/> */}
        {/* <KeepYourAccSafe/> */}
        {/* <ReEnterCode/> */}
        <WelcomeLogo/>
        
      </div>
    );
  }
}


export default App;
