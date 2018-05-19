import React, { Component } from 'react';
import './KeepYourAccSafe.css';
import styled from 'styled-components';

const WhiteContainer = styled.div`
  -webkit-box-shadow: 0px 9px 14px 0px rgba(0,0,0,0.4);
  -moz-box-shadow: 0px 9px 14px 0px rgba(0,0,0,0.4);
  box-shadow: 0px 9px 14px 0px rgba(0,0,0,0.4);
  /* height:440px; */
  margin-top: 7rem;
  padding-top:2rem;
  padding-left:2.2rem;
  padding-bottom:2rem;
  padding-right:2.2rem;
  /* margin-bottom: 3rem; */
  margin-left: 3rem;
  margin-right: 3rem;
  /* position:relative; */
  z-index:110;
  h1{
    font-size:1.5rem;
  }
`

class KeepYourAccSafe extends Component {
  constructor(){
    super();
    this.state = {
    }
  }

  render = () => (
    <div className="KeepYourAccSafe">
      <WhiteContainer className='KeepYourAccSafe__whiteCont bg-white br3'>
        <h1>Keep Your Account Safe</h1>
        <h3>Thanks for signing up!</h3>
        <p>To make sure it's really you, we'll send you a code to your phone number.</p>
        <p>If you click the Send button below, you confirm that you are authorized to use the phone number you provided and agree to receive SMS texts to verify your identity. Carrier fees may apply.</p>
        <div id="buttonDiv">
          <button>send</button>
        </div>
      </WhiteContainer>
      
    </div>
  )
}


export default KeepYourAccSafe;



