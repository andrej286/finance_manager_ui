import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import {costTypes} from "./add-cost-form";

const EditCostForm = ({ show, cost, onHide, onChange, onSubmit }) => {

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Income</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cost && (
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name of Income</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={cost.name}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="costType">
              <Form.Label>Type:</Form.Label>
              <Form.Control
                as="select"
                name="costType"
                value={cost.costType}
                onChange={onChange}
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
                value={cost.amount}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="dateOfPayment">
              <Form.Label>Date of Payment:</Form.Label>
              <Form.Control
                type="date"
                name="dateOfPayment"
                value={cost.dateOfPayment}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={cost.description}
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

export default EditCostForm;
