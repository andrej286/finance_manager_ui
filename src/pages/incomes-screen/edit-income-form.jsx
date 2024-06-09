import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import {useTranslation} from "react-i18next";

const EditIncomeForm = ({ show, income, onHide, onChange, onSubmit }) => {
  const {t} = useTranslation();

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{t("section.income.form.editTitle")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {income && (
          <Form>
            <Form.Group controlId="name">
              <Form.Label>{t("section.income.form.name")}</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={income.name}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>{t("section.income.form.description")}</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={income.description}
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group controlId="annualMonthlyValue">
              <Form.Label>{t("section.income.form.monthlyValue")}</Form.Label>
              <Form.Control
                type="text"
                name="annualMonthlyValue"
                value={income.annualMonthlyValue}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="startDate">
              <Form.Label>{t("section.income.form.startDate")}</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={new Date(income.startDate).toLocaleDateString()}
                placeholder={new Date(income.startDate).toLocaleDateString()}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="terminationDate">
              <Form.Label>{t("section.income.form.terminationDate")}</Form.Label>
              <Form.Control
                type="date"
                name="terminationDate"
                value={income.terminationDate}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="interestRate">
              <Form.Label>{t("section.income.form.interest")}</Form.Label>
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
          {t("section.income.form.close")}
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          {t("section.income.form.save")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditIncomeForm;
