import React from 'react';
import styled from 'styled-components';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import theme from '../../theme.js'
import Dropdown from './dropdown';
import Profile from '../../profile/components/profile';
import { logoutUser }  from '../../auth/actions/auth_actions';
import{ connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const StyledNav = styled.div`
  min-height: 15px;
  max-height: 10%;
  background: ${theme.background};
  display: inline-grid;
  grid-template-columns: 10% 80% 10%;
  grid-template-rows: 100%;
  padding: 20px;
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  min-height: 100%;
`;

const StyledList = styled.li`
  list-style: none;
`;

const NavBar = ({...props}) => {
  const handleLogout = () => {
    const payload = {
      token: props.token,
      data: {
        id: 1
      }
    };
    props.logoutUser(payload);
  }
  return (
    <StyledNav>    
      <StyledLink to="/" label="home">Home</StyledLink>
      <StyledLink to="/dashboard" label="dashboard">Dashboard</StyledLink>
      <Dropdown>
       <StyledList onClick={handleLogout}>
          Logout
        </StyledList>
        <StyledLink to="/profile" label="profile">
          Profile
        </StyledLink>
      </Dropdown>
    </StyledNav>
  );
}

const mapStateToProps = state => {
  return {
      token: state.auth.token.token,
      user: state.auth.user
  };
}

const mapDispatchToProps = dispatch => {
  return (
      bindActionCreators({
          logoutUser
      }, dispatch)
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
