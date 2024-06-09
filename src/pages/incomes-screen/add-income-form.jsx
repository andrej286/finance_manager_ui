import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { createIncome } from "../../api/http-utils/incomes";
import {AddButton} from "../../components/add-button";
import {useTranslation} from "react-i18next";

const AddIncomeForm = ({ onSuccess }) => {
  const [show, setShow] = useState(false);
  const {t} = useTranslation();
  const [values, setValues] = useState({
    name: '',
    description: '',
    annualMonthlyValue: '',
    startDate: '',
    terminationDate: '',
    interestRate: '',
  });

  const handleClose = () => {
    setShow(false);
    setValues({
      name: '',
      description: '',
      annualMonthlyValue: '',
      startDate: '',
      terminationDate: '',
      interestRate: '',
    })
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
    await createIncome(values);
    onSuccess();
    handleClose();
  };

  return (
    <>
      <AddButton onClick={handleShow} text={t("section.income.form.addTitle")}/>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t("section.income.form.addTitle")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>{t("section.income.form.name")}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t("section.income.form.namePlaceholder")}
                name="name"
                value={values.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>{t("section.income.form.description")}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t("section.income.form.descriptionPlaceholder")}
                name="description"
                value={values.description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="annualMonthlyValue">
              <Form.Label>{t("section.income.form.monthlyValue")}</Form.Label>
              <Form.Control
                type="number"
                placeholder={t("section.income.form.monthlyValuePlaceholder")}
                name="annualMonthlyValue"
                value={values.annualMonthlyValue}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="startDate">
              <Form.Label>{t("section.income.form.startDate")}</Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={values.startDate}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="terminationDate">
              <Form.Label>{t("section.income.form.terminationDate")}</Form.Label>
              <Form.Control
                type="date"
                name="terminationDate"
                value={values.terminationDate}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="interestRate">
              <Form.Label>{t("section.income.form.interest")}</Form.Label>
              <Form.Control
                type="number"
                placeholder={t("section.income.form.interestPlaceholder")}
                name="interestRate"
                value={values.interestRate}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {t("section.income.form.close")}
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {t("section.income.form.save")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddIncomeForm;
