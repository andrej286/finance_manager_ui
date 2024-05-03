import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { createIncome } from "../../api/http-utils/incomes";

const AddIncomeForm = ({ onSuccess }) => {
  const [show, setShow] = useState(false);
  const [values, setValues] = useState({
    name: '',
    description: '',
    annualMonthlyValue: '',
    startDate: '',
    terminationDate: '',
    interestRate: '',
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
    await createIncome(values);
    onSuccess();
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create Income
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Income form</Modal.Title>
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
            <Form.Group controlId="description">
              <Form.Label>Description:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                name="description"
                value={values.description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="annualMonthlyValue">
              <Form.Label>Annual Monthly Value:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter value"
                name="annualMonthlyValue"
                value={values.annualMonthlyValue}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="startDate">
              <Form.Label>Start Date:</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={values.startDate}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="terminationDate">
              <Form.Label>Termination Date:</Form.Label>
              <Form.Control
                type="date"
                name="terminationDate"
                value={values.terminationDate}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="interestRate">
              <Form.Label>Interest Rate:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter interest rate"
                name="interestRate"
                value={values.interestRate}
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
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddIncomeForm;
