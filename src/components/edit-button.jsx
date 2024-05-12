import React from 'react';
import {Button, Image} from "react-bootstrap";

export const EditButton = ({onClick}) => {
  return (
    <Button className="p-0" variant="link">
      <Image onClick={onClick} width="22" src="/images/edit-icon.svg" roundedCircle fluid className="me-2" />
    </Button>
  )
}