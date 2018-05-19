import React, { Component } from 'react';
import './RegisterForm.css';
import styled from 'styled-components';

const WhiteContainer = styled.div`
  -webkit-box-shadow: 0px 9px 14px 0px rgba(0,0,0,0.4);
  -moz-box-shadow: 0px 9px 14px 0px rgba(0,0,0,0.4);
  box-shadow: 0px 9px 14px 0px rgba(0,0,0,0.4);
`

class RegisterForm extends Component {
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
  
  // onSubmit = e =>{
  //   e.preventDefault();
  //   // Print the user input to the console:
  //   console.log(this.state);
      //  this.setState({
      //   firstName: '',
      //   lastName: '',
      //   mobile: '',
      //   zipCode: '',
      //  })
  // }

  render = () => (
    <WhiteContainer className='bg-white mh4 mv5 pa4 br3'>
      <form id='registerForm' action="">

        <h1>Register</h1>

        <label>First name</label>
        <input
          className=''
          // placeholder=
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
          {/* <button onClick={e => this.onSubmit(e)}>submit</button> */}
          <button>submit</button>
        </div>

      </form>
    </WhiteContainer>
  )
}


export default RegisterForm;



