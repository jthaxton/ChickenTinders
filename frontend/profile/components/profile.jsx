import React, { useState } from 'react';
import  {connect}  from 'react-redux';
import { bindActionCreators } from 'redux';
import Preferences from './preferences';
import Security from './security';
import styled from 'styled-components';

const StyledSideBar = styled.div`
  background: blue;
  background-color: transparent;
  opacity: 0.1;
`;

const StyeledProfileGrid = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
  grid-template-rows: 100% 40%;
`;


const Profile = ({...props}) => {
  const [visible, setVisible] = useState(0)

  const components = ["Preferences", "Security"];
  const handleRender = (idx) => {
    setVisible(idx);
  }
  return (
    <StyeledProfileGrid>
      <StyledSideBar>
        {components.map((component, idx) => (
          <div key={idx} onClick={() => handleRender(idx)}>{component}</div>
        ))}
      </StyledSideBar>
      <div>
        {visible === 0 && (
          <Preferences />
        )}
        {visible === 1 && (
          <Security/>
        )}
        </div>
    </StyeledProfileGrid>
    
  )
}

const mapStateToProps = state => {
  return {
      token: state.auth.token.token,
  };
}

const mapDispatchToProps = dispatch => {
  return (
      bindActionCreators({
      }, dispatch)
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);



// var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// if(inputText.value.match(mailformat))

// var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
// .test
// var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
