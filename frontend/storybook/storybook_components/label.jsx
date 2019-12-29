import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  border-bottom-color:rgb(96, 103, 112);
  border-bottom-style:none;
  border-bottom-width:0px;
  border-image-outset:0px;
  border-image-repeat:stretch;
  border-image-slice:100%;
  border-image-source:none;
  border-image-width:1;
  border-left-color:rgb(96, 103, 112);
  border-left-style:none;
  border-left-width:0px;
  border-right-color:rgb(96, 103, 112);
  border-right-style:none;
  border-right-width:0px;
  border-top-color:rgb(96, 103, 112);
  border-top-style:none;
  border-top-width:0px;
  box-sizing:border-box;
  color:rgb(96, 103, 112);
  cursor:default;
  direction:ltr;
  display:flex;
  font-family:system-ui, -apple-system, system-ui, ".SFNSText-Regular", sans-serif;
  font-size:larger;
  font-weight:400;
  height:auto;
  line-height:16px;
  margin-bottom:0px;
  margin-left:0px;
  margin-right:0px;
  margin-top:0px;
  padding-bottom:1px;
  position:relative;
  transform:none;
  vertical-align:middle;
  width:100%;
  -webkit-font-smoothing:subpixel-antia;
`;

const Label = ({...props}) => (
  <StyledLabel {...props}>
    {props.children}
  </StyledLabel>
)

export default Label