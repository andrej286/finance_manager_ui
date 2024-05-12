import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createGoal } from '../../api/http-utils/goals';
import {AddButton} from "../../components/add-button";

export const goalTypes = [
  'TRAVEL',
  'REALESTATE',
  'CAR',
  'EDUCATION',
  'RETIREMENT',
  'HEALTH',
  'INVESTMENT',
  'BUSINESS',
  'FAMILY',
  'CHARITY',
  'OTHER',
];

const AddGoalForm = ({ onSuccess }) => {
  const [show, setShow] = useState(false);
  const [values, setValues] = useState({
    name: '',
    goalType: '',
    amount: '',
    dateOfOccurrence: '',
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
    await createGoal(values);
    onSuccess();
    handleClose();
  };

  return (
    <>
      <AddButton onClick={handleShow} text={"Add a Goal"}/>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Goal form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name of Goal</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="goalType">
              <Form.Label>Type:</Form.Label>
              <Form.Control
                as="select"
                name="goalType"
                value={values.goalType}
                onChange={handleChange}
              >
                {goalTypes.map((type) => (
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
            <Form.Group controlId="dateOfOccurrence">
              <Form.Label>Date of Occurrence:</Form.Label>
              <Form.Control
                type="date"
                name="dateOfOccurrence"
                value={values.dateOfOccurrence}
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
            Add Goal
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddGoalForm;
