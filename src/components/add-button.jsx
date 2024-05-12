import React from 'react';
import {Button, Image} from "react-bootstrap";
import styled from "styled-components";

const StyledButton = styled(Button)`
  border-color: #02a6ff !important;
  background-color: #02a6ff !important;
`;

export const AddButton = ({onClick, text}) => {
  return (
    <StyledButton className="p-0 bg-white fs-6 rounded-pill border border-4" onClick={onClick} style={{borderColor: 'red'}} >
      <Image width="22" src="/images/add-icon.svg" roundedCircle fluid className="bg-white me-2 mb-1 mt-1" />
      <span className="me-2 text-white align-middle">{text}</span>
    </StyledButton>
  )
}