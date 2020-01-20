import React, {useState} from 'react';
import Label from '../../storybook/storybook_components/label';
const Security = ({...props}) => {
  const [strongPassword, setStrongPassword] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(null);
  
  const validatePassword = (e) => {
    const strongRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    setStrongPassword(strongRegex.test(e.target.value));
    setPassword(e.target.value);
  }

  const handlePasswordMatch = (e) => {
    setPasswordMatch(password === e.target.value);
  }

  const handlePasswordChange = (e, string) => {
    if (passwordMatch && setPassword) {
      const payload = {
        token: props.token,
        id: props.userId,
      };
      payload[string] = e.target.value;
      props.updateUser(payload);
    }
  }

  const handleEmailChange = (e, string) => {
    const payload = {
      token: props.token,
      id: props.userId,
    };
    payload[string] = e.target.value;
    props.updateUser(payload);
  }
  return (
    <>
      <Label>Email
        <input onBlur={(e) => handleEmailChange(e, "username")} value={props.user && props.user.username}></input>
      </Label>
      {/* <Label>Old Password
        <input></input>
      </Label> */}
      <Label>New Password
        <input onChange={(e) => validatePassword(e)}></input>
      </Label>
      {strongPassword === false && (<div>NOT STRONG ENOUGH</div>)}
      <Label>Verify New Password
        <input onChange={(e) => handlePasswordMatch(e)} onBlur={(e) => handlePasswordChange(e, "password")}></input>
      </Label>
      {passwordMatch === false && (<div>PASSWORD DOESNT MATCH</div>)}
    </>
  )
}

export default Security;