import React from 'react';
import {Button, Image} from "react-bootstrap";

export const DeleteButton = ({onClick}) => {
  return (
    <Button className="p-0" variant="link">
      <Image onClick={onClick} width="25" src="/images/delete-icon.svg" fluid className="me-2" />
    </Button>
  )
}