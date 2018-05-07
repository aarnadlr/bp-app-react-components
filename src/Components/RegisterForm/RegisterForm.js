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
    <Div className='bg-white ma4 pa4 br3'>
      <form id='registerForm' action="">

        <h1>Register</h1>

        <label>First name</label>
        <input
          className=''
          placeholder="Snoop"
          value={this.state.firstName}
          onChange={e => this.setState({firstName: e.target.value})}
        />
        <br/>

        <label>Last name</label>
        <input
          className=''
          placeholder="Dogg"
          value={this.state.lastName}
          onChange={e => this.setState({lastName: e.target.value})}
        />
        <br/>

        <label>Mobile</label>
        <input
          className=''
          placeholder="(xxx) xxx-xxxx"
          value={this.state.mobile}
          onChange={e => this.setState({mobile: e.target.value})}
        />
        <br/>

        <label>Zip code</label>
        <input
          className=''
          placeholder="xxxxx"
          value={this.state.zipCode}
          onChange={e => this.setState({zipCode: e.target.value})}
          />
        <br/>
        
        <div id="buttonDiv">
          <button onClick='' >submit</button>
        </div>

      </form>
    </Div>
  )
}

export default RegisterForm;



