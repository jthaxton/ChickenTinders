import React, { useState, useEffect } from 'react';
import  {connect}  from 'react-redux';
import { bindActionCreators } from 'redux';
import Preferences from './preferences';
import Security from './security';
import styled from 'styled-components';
import {updateUser, updateUserPreferences, fetchUserPreferences, createUserPreference} from '../actions/actions';
import { dashboard } from '../../dashboard/sagas/saga';

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
  const [fetched, setFetched] = useState(false);

  useEffect(()=>{
    if(!fetched) {
      props.fetchUserPreferences({id: props.userId});
      setFetched(true);
    }
  })

  const handleRender = (idx) => {
    setVisible(idx);
  }
  return (
    <StyeledProfileGrid>
      <StyledSideBar>
        <div onClick={() => handleRender(0)}>
          Preferences
        </div>
        <div onClick={() => handleRender(1)}>
          Security
        </div>
      </StyledSideBar>
        <div>
          {visible === 0 && (
            <Preferences preferences={props.preferences} createUserPreference={props.createUserPreference} userPreferences={props.preferences} updateUserPreferences={props.updateUserPreferences} userId={props.userId} token={props.token} />
          )}
          {visible === 1 && (
            <Security updateUser={props.updateUser} userId={props.userId} user={props.user} token={props.token}/>
          )}
        </div>
    </StyeledProfileGrid>
  )
}

const mapStateToProps = state => {
  return {
    token: state.auth.token.token,
    userId: state.auth.user.id,
    preferences: state.profile.userPreferences,
    user: state.profile.user,

  };
}

const mapDispatchToProps = dispatch => {
  return (
      bindActionCreators({
        updateUser,
        updateUserPreferences,
        fetchUserPreferences,
        createUserPreference,
      }, dispatch)
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);



// var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// if(inputText.value.match(mailformat))

// var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
// .test
// var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
