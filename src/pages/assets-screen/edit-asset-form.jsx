import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditAssetForm = ({ show, asset, onHide, onChange, onSubmit }) => {

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Income</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {asset && (
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name of Income</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={asset.name}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="value">
              <Form.Label>Amount:</Form.Label>
              <Form.Control
                type="number"
                name="value"
                value={asset.value}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="interestRate">
              <Form.Label>Interest Rate</Form.Label>
              <Form.Control
                type="text"
                name="interestRate"
                value={asset.interestRate}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="dateOfAcquirement">
              <Form.Label>Date of Acquirement:</Form.Label>
              <Form.Control
                type="date"
                name="dateOfAcquirement"
                value={asset.dateOfAcquirement}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={asset.description}
                onChange={onChange}
              />
            </Form.Group>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditAssetForm;
