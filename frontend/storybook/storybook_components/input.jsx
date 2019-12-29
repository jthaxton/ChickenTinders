import React, { useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    background-color:rgb(255, 255, 255);
    border-bottom-color:rgb(59, 89, 152);
    border-bottom-left-radius:3px;
    border-bottom-right-radius:3px;
    border-bottom-style:solid;
    border-bottom-width:1px;
    border-image-outset:0px;
    border-image-repeat:stretch;
    border-image-slice:100%;
    border-image-source:none;
    border-image-width:1;
    border-left-color:rgb(59, 89, 152);
    border-left-style:solid;
    border-left-width:1px;
    border-right-color:rgb(59, 89, 152);
    border-right-style:solid;
    border-right-width:1px;
    border-top-color:rgb(59, 89, 152);
    border-top-left-radius:3px;
    border-top-right-radius:3px;
    border-top-style:solid;
    border-top-width:1px;
    box-sizing:border-box;
    color:black;
    direction:ltr;
    display:block;
    font-family:system-ui, -apple-system, system-ui, ".SFNSText-Regular", sans-serif;
    font-size:12px;
    height:26px;
    left:-1px;
    line-height:16.08px;
    margin-left:0px;
    margin-top:0px;
    max-width:448px;
    min-width:144px;
    overflow-x:hidden;
    overflow-y:hidden;
    padding-left:5px;
    padding-right:48px;
    position:relative;
    outline:none;
    width: 100%;
`;

const Input = ({...props}) => {

    return (
        <StyledInput { ...props }>
        </StyledInput>
    );
};

export default Input;