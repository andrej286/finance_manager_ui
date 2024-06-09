import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createCost } from '../../api/http-utils/costs';
import {AddButton} from "../../components/add-button";
import {costTypes, initialCostFormState} from "./constants";
import {useTranslation} from "react-i18next";

const AddCostForm = ({ onSuccess }) => {
  const [show, setShow] = useState(false);
  const [values, setValues] = useState(initialCostFormState);
  const {t} = useTranslation();

  const handleClose = () => {
    setShow(false);
    setValues(initialCostFormState);
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
    await createCost(values);
    onSuccess();
    handleClose();
  };

  return (
    <>
      <AddButton onClick={handleShow} text={t("section.cost.form.addTitle")}/>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t("section.cost.form.addTitle")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
                <Form.Label>{t("section.cost.form.name")}</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
              </Form.Group>
            <Form.Group controlId="costType">
             <Form.Label>{t("section.cost.form.type")}</Form.Label>
              <Form.Control
                as="select"
                name="costType"
                value={values.costType}
                onChange={handleChange}
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
                value={values.amount}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="dateOfPayment">
              <Form.Label>{t("section.cost.form.dateOfPayment")}</Form.Label>
              <Form.Control
                type="date"
                name="dateOfPayment"
                value={values.dateOfPayment}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>{t("section.cost.form.dateOfPayment")}</Form.Label>
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
            {t("section.cost.form.close")}
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {t("section.cost.form.save")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddCostForm;
