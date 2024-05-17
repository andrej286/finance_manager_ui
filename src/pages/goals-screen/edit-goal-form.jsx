import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import {goalTypes, goalTypeTexts} from "./constants";

const EditGoalForm = ({ show, goal, onHide, onChange, onSubmit }) => {

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Income</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {goal && (
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name of Income</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={goal.name}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="goalType">
              <Form.Label>Type:</Form.Label>
              <Form.Control
                as="select"
                name="goalType"
                value={goal.goalType}
                onChange={onChange}
              >
                {goalTypes.map((type) => (
                  <option key={type} value={type}>
                    {goalTypeTexts[type]}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="amount">
              <Form.Label>Amount:</Form.Label>
              <Form.Control
                type="number"
                name="amount"
                value={goal.amount}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="dateOfOccurrence">
              <Form.Label>Date of Occurrence:</Form.Label>
              <Form.Control
                type="date"
                name="dateOfOccurrence"
                value={goal.dateOfOccurrence}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={goal.description}
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

export default EditGoalForm;
