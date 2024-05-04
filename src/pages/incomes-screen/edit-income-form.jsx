import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditIncomeForm = ({ show, income, onHide, onChange, onSubmit }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Income</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {income && (
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name of Income</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={income.name}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description of Income</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={income.description}
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group controlId="annualMonthlyValue">
              <Form.Label>Annual Monthly Value</Form.Label>
              <Form.Control
                type="text"
                name="annualMonthlyValue"
                value={income.annualMonthlyValue}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="startDate">
              <Form.Label>Date of Occurrence</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={income.startDate}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="terminationDate">
              <Form.Label>Date of Termination</Form.Label>
              <Form.Control
                type="date"
                name="terminationDate"
                value={income.terminationDate}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="interestRate">
              <Form.Label>Interest Rate</Form.Label>
              <Form.Control
                type="text"
                name="interestRate"
                value={income.interestRate}
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

export default EditIncomeForm;
