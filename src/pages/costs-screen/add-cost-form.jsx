import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createCost } from '../../api/http-utils/costs';
import {AddButton} from "../../components/add-button";

export const costTypes = ['ONE_TIME', 'MONTHLY', 'YEARLY'];

const AddCostForm = ({ onSuccess }) => {
  const [show, setShow] = useState(false);
  const [values, setValues] = useState({
    name: '',
    costType: '',
    amount: '',
    dateOfPayment: '',
    description: '',
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
    await createCost(values);
    onSuccess();
    handleClose();
  };

  return (
    <>
      <AddButton onClick={handleShow} text={"Add a Cost"}/>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cost form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
                <Form.Label>Name of Cost</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
              </Form.Group>
            <Form.Group controlId="costType">
             <Form.Label>Type:</Form.Label>
              <Form.Control
                as="select"
                name="costType"
                value={values.costType}
                onChange={handleChange}
              >
                {costTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="amount">
              <Form.Label>Amount:</Form.Label>
              <Form.Control
                type="number"
                name="amount"
                value={values.amount}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="dateOfPayment">
              <Form.Label>Date of Payment:</Form.Label>
              <Form.Control
                type="date"
                name="dateOfPayment"
                value={values.dateOfPayment}
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
            Add Cost
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddCostForm;
