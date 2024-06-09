import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import {goalTypes} from "./constants";
import {useTranslation} from "react-i18next";

const EditGoalForm = ({ show, goal, onHide, onChange, onSubmit }) => {
  const {t} = useTranslation();

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{t("section.goal.form.editTitle")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {goal && (
          <Form>
            <Form.Group controlId="name">
              <Form.Label>{t("section.goal.form.name")}</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={goal.name}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="goalType">
              <Form.Label>{t("section.goal.form.type")}</Form.Label>
              <Form.Control
                as="select"
                name="goalType"
                value={goal.goalType}
                onChange={onChange}
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
                value={goal.amount}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="dateOfOccurrence">
              <Form.Label>{t("section.goal.form.dateOfOccurrence")}</Form.Label>
              <Form.Control
                type="date"
                name="dateOfOccurrence"
                value={goal.dateOfOccurrence}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>{t("section.goal.form.description")}</Form.Label>
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
          {t("section.goal.form.close")}
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          {t("section.goal.form.save")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditGoalForm;
