import React from 'react';
import Label from '../../storybook/storybook_components/Label';
import Input from '../../storybook/storybook_components/input';

const Preferences = ({...props}) => {
  return (
    <>
      <Label>First Name<Input></Input></Label>
      <Label>Last Name<Input></Input></Label>
      <Label>Zip<Input type="number"></Input></Label>
      <Label>Gender
        <select>
          <option>Female</option>
          <option>Male</option>
          <option>Nonbinary</option>
          <option>Refuse to state</option>
        </select>
      </Label>
      <Label>Birth Year<Input type="number"></Input></Label>
    </>
  )
}

export default Preferences;