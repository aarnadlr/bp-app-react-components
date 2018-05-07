import React, { Component } from 'react';
import './RegisterForm.css';
import styled from 'styled-components';

const Div = styled.div`
  -webkit-box-shadow: 0px 9px 14px 0px rgba(0,0,0,0.4);
  -moz-box-shadow: 0px 9px 14px 0px rgba(0,0,0,0.4);
  box-shadow: 0px 9px 14px 0px rgba(0,0,0,0.4);
`


class RegisterForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    mobile: '',
    zipCode: '',
  }

  render = () => (
    <Div className='bg-white ma5 pa5 br3'>
      <form id='registerForm' action="">

        <h1>Register</h1>

        <input
          className=''
          placeholder="First Name"
          value={this.state.firstName}
          onChange={e => this.setState({firstName: e.target.value})}
        />
        <br/>

        <input
          className=''
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={e => this.setState({lastName: e.target.value})}
        />
        <br/>

        <input
          className=''
          placeholder="Mobile number"
          value={this.state.mobile}
          onChange={e => this.setState({mobile: e.target.value})}
        />
        <br/>

        <input
          className=''
          placeholder="Zip code"
          value={this.state.zipCode}
          onChange={e => this.setState({zipCode: e.target.value})}
          />
        <br/>
        
        <button onClick='' >submit</button>

      </form>
    </Div>
  )
}

export default RegisterForm;



