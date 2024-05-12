import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createAsset } from '../../api/http-utils/assets';

const AddAssetForm = ({ onSuccess }) => {
  const [show, setShow] = useState(false);
  const [values, setValues] = useState({
    name: '',
    description: '',
    value: '',
    interestRate: '',
    dateOfAcquirement: '',
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    await createAsset(values);
    onSuccess();
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add an Asset
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add an Asset</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="value">
              <Form.Label>Value (€):</Form.Label>
              <Form.Control
                type="number"
                name="value"
                value={values.value}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="interestRate">
              <Form.Label>Interest Rate (%):</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter interest rate"
                name="interestRate"
                value={values.interestRate}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="dateOfAcquirement">
              <Form.Label>Acquiring date:</Form.Label>
              <Form.Control
                type="date"
                name="dateOfAcquirement"
                value={values.dateOfAcquirement}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={values.description}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Add Asset
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddAssetForm;
