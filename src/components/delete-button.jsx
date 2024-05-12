import React, {useState} from 'react';
import {Button, Modal, Image} from "react-bootstrap";

export const DeleteButton = ({onClick}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    onClick();
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this item?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Cancel</Button>
          <Button variant="danger" onClick={handleDelete}>Confirm deletion</Button>
        </Modal.Footer>
      </Modal>
      <Button className="p-0" variant="link">
        <Image onClick={handleShow} width="25" src="/images/delete-icon.svg" fluid className="me-2"/>
      </Button>
    </>

  )
}