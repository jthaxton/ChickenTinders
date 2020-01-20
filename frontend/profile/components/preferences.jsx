import React, {useState} from 'react';
import Label from '../../storybook/storybook_components/Label';
import Input from '../../storybook/storybook_components/input';
// import Calendar from 'react-calendar';

const Preferences = ({...props}) => {
  // Groundwork for react calendar
  // const [date, setDate] = useState(null);
  // const [cal, setCal] = useState(false);
  // const handleDate = date => {
  //   setDate(date);
  //   setCal(false);
  // }

  // const handleCal = () => {
  //   setCal(true);
  // }
  const updateUserField = (e, string) => {
    const payload = {id: 0, preferenceId: props.preferences && props.preferences.id, token: props.token };
    payload[string] = e.target.value;

    if(Boolean(props.userPreferences) === true) {
      props.updateUserPreferences(payload);
    } else {
      props.createUserPreference(payload);
    }
  }

  return (
    <>
      <Label>Zip
        <Input type="number" onBlur={(e) => updateUserField(e, "zip")} value={props.preferences && props.preferences.zip}></Input>
      </Label>
      <Label>Birthday Year
        <input type="number" onBlur={(e) => updateUserField(e, "birth_year")} value={props.preferences && props.preferences.birth_year}></input>
        {/* {cal === false && (
          <button onClick={() => handleCal(true)}>Open Calendar</button>
        )}
        {cal === true && (
        <Calendar onClickDay={(date) => handleDate(date)} value={date}/>
        )} */}
      </Label>
      <Label>Gender
        <select onChange={(e) => updateUserField(e, "gender")} value={props.preferences && props.preferences.gender}>
          <option defaultValue={null} disabled hidden> -- select an option -- </option>
          <option>Female</option>
          <option>Male</option>
          <option>Nonbinary</option>
          <option>Refuse to state</option>
        </select>
      </Label>
      <Label>Looking for
        <select onChange={(e) => updateUserField(e, "gender_preference")} value={props.preferences && props.preferences.gender_preference}>
          <option defaultValue={null} disabled hidden> -- select an option -- </option>
          <option>Female</option>
          <option>Male</option>
          <option>Nonbinary</option>
          <option>Male and Female</option>
          <option>Other</option>
          <option>Refuse to state</option>
        </select>
      </Label>
    </>
  )
}

export default Preferences;