import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import {costTypes} from "./constants";
import {useTranslation} from "react-i18next";

const EditCostForm = ({ show, cost, onHide, onChange, onSubmit }) => {
  const {t} = useTranslation();

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{t("section.cost.form.editTitle")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cost && (
          <Form>
            <Form.Group controlId="name">
              <Form.Label>{t("section.cost.form.name")}</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={cost.name}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="costType">
              <Form.Label>{t("section.cost.form.type")}</Form.Label>
              <Form.Control
                as="select"
                name="costType"
                value={cost.costType}
                onChange={onChange}
              >
                {costTypes.map((type) => (
                  <option key={type} value={type}>
                    {t(`section.cost.type.${type}`)}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="amount">
              <Form.Label>{t("section.cost.form.amount")}</Form.Label>
              <Form.Control
                type="number"
                name="amount"
                value={cost.amount}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="dateOfPayment">
              <Form.Label>{t("section.cost.form.dateOfPayment")}</Form.Label>
              <Form.Control
                type="date"
                name="dateOfPayment"
                value={cost.dateOfPayment}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>{t("section.cost.form.description")}</Form.Label>
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
          {t("section.cost.form.close")}
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          {t("section.cost.form.save")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditCostForm;
