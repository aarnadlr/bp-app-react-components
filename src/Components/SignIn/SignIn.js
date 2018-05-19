import React, { Component } from 'react';
import './SignIn.css';
import styled from 'styled-components';

const WhiteContainer = styled.div`
  -webkit-box-shadow: 0px 9px 14px 0px rgba(0,0,0,0.4);
  -moz-box-shadow: 0px 9px 14px 0px rgba(0,0,0,0.4);
  box-shadow: 0px 9px 14px 0px rgba(0,0,0,0.4);
  height:350px;
  margin-top: 9rem;
  /* margin-bottom: 3rem; */
  margin-left: 3rem;
  margin-right: 3rem;
  position:relative;
  z-index:110;
  h1{
    font-size:1.5rem;
  }
`
const WhiteUndercard = styled.div`
  background:#f7f7f7;
  -webkit-box-shadow: 0px 9px 14px 0px rgba(0,0,0,0.4);
  -moz-box-shadow: 0px 9px 14px 0px rgba(0,0,0,0.4);
  box-shadow: 0px 9px 14px 0px rgba(0,0,0,0.4);
  height:70px;
  /* margin-top: 4rem; */
  /* margin-bottom: 4rem; */
  margin-left: 4rem;
  margin-right: 4rem;
  position:relative;
  bottom: 1rem;
  z-index:10;
  h1{
    font-size:1.4rem;
    text-align:center;
    line-height:.1;
    position:relative;
    bottom: 5px;
  }
`

class SignIn extends Component {
  constructor(){
    super();
    this.state = {
      // placeholder: ["Snoop","Dogg","(xxx) xxx-xxxx"],
      placeholder: {
            first: "Snoop",
            last:"Dogg",
            mobile:"(xxx) xxx-xxxx",
            zipCode:"xxxxx"
            },
      firstName: '',
      lastName: '',
      mobile: '',
      zipCode: '',
    }
  }

  render = () => (
    <div className="wrapper">
      <WhiteContainer className='bg-white pa4 br3'>
      <h1>Sign In</h1>
        {/* <form id='registerForm' action="">
  
  
          <label>First name</label>
          <input
            className=''
            placeholder={this.state.placeholder.first}
            value={this.state.firstName}
            onChange={e => this.setState({firstName: e.target.value})}
          />
          <br/>
  
          <label>Last name</label>
          <input
            className=''
            placeholder={this.state.placeholder.last}
            value={this.state.lastName}
            onChange={e => this.setState({lastName: e.target.value})}
          />
          <br/>
  
          <label>Mobile</label>
          <input
            className=''
            placeholder={this.state.placeholder.mobile}
            value={this.state.mobile}
            onChange={e => this.setState({mobile: e.target.value})}
          />
          <br/>
  
          <label>Zip code</label>
          <input
            className=''
            placeholder={this.state.placeholder.zipCode}
            value={this.state.zipCode}
            onChange={e => this.setState({zipCode: e.target.value})}
            />
          <br/>
          
          <div id="buttonDiv">
            <button>submit</button>
          </div>
  
        </form> */}
      </WhiteContainer>
      
      <WhiteUndercard className='pa4 br3'>
        <h1>Register</h1>
      </WhiteUndercard>
      
    </div>
  )
}


export default SignIn;



