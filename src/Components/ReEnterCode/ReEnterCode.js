import React from 'react';
import './ReEnterCode.css';
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

class ReEnterCode extends React.Component {
  
  render = () => (
    <div className="ReEnterCode">
      <WhiteContainer className='ReEnterCode__whiteCont bg-white br3'>
        <h1>Re-Enter Code</h1>
        <p>Attempt unsuccessful.</p>
        <div className="numInputs flex justify-center">
          <input type="password" maxLength="1" id="1"/>
          <input type="password" maxLength="1" id="2"/>
          <input type="password" maxLength="1" id="3"/>
          <input type="password" maxLength="1" id="4"/>
          <input type="password" maxLength="1" id="5"/>
          <input type="password" maxLength="1" id="6"/>
        </div>
      </WhiteContainer>
      
    </div>
  )
}

export default ReEnterCode;
