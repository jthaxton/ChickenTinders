import React from 'react';
import  {connect}  from 'react-redux';
import { bindActionCreators } from 'redux';

const Profile = ({...props}) => {
  const handleChange = (e) => {
    console.log('ok')
  }

  return (
    <input onBlur={(e) => handleChange(e)}>
    </input>
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
