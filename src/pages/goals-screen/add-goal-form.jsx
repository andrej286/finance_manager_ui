import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createGoal } from '../../api/http-utils/goals';
import {AddButton} from "../../components/add-button";
import {goalTypes, initialGoalFormState} from "./constants";
import {useTranslation} from "react-i18next";

const AddGoalForm = ({ onSuccess }) => {
  const [show, setShow] = useState(false);
  const [values, setValues] = useState(initialGoalFormState);
  const {t} = useTranslation();

  const handleClose = () => {
    setShow(false);
    setValues(initialGoalFormState)
  }
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
      <AddButton onClick={handleShow} text={t("section.goal.form.addTitle")}/>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t("section.goal.form.addTitle")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>{t("section.goal.form.name")}</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="goalType">
              <Form.Label>{t("section.goal.form.type")}</Form.Label>
              <Form.Control
                as="select"
                name="goalType"
                value={values.goalType}
                onChange={handleChange}
              >
                {goalTypes.map((type) => (
                  <option key={type} value={type}>
                    {t(`section.goal.type.${type}`)}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="amount">
              <Form.Label>{t("section.goal.form.amount")}</Form.Label>
              <Form.Control
                type="number"
                name="amount"
                value={values.amount}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="dateOfOccurrence">
              <Form.Label>{t("section.goal.form.dateOfOccurrence")}</Form.Label>
              <Form.Control
                type="date"
                name="dateOfOccurrence"
                value={values.dateOfOccurrence}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>{t("section.goal.form.description")}</Form.Label>
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
            {t("section.goal.form.close")}
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {t("section.goal.form.save")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddGoalForm;
