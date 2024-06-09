import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createAsset } from '../../api/http-utils/assets';
import {AddButton} from "../../components/add-button";
import {useTranslation} from "react-i18next";

const AddAssetForm = ({ onSuccess }) => {
  const [show, setShow] = useState(false);
  const {t} = useTranslation();
  const [values, setValues] = useState({
    name: '',
    description: '',
    value: '',
    interestRate: '',
    dateOfAcquirement: '',
  });

  const handleClose = () => {
    setShow(false);
    setValues({
      name: '',
      description: '',
      value: '',
      interestRate: '',
      dateOfAcquirement: '',
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
    await createAsset(values);
    onSuccess();
    handleClose();
  };

  return (
    <>
      <AddButton onClick={handleShow} text={t("section.asset.form.addTitle")}/>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{t("section.asset.form.addTitle")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>{t("section.asset.form.name")}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t("section.asset.form.namePlaceholder")}
                name="name"
                value={values.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="value">
              <Form.Label>{t("section.asset.form.value")}</Form.Label>
              <Form.Control
                type="number"
                name="value"
                value={values.value}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="interestRate">
              <Form.Label>{t("section.asset.form.interest")}</Form.Label>
              <Form.Control
                type="number"
                placeholder={t("section.asset.form.interestPlaceholder")}
                name="interestRate"
                value={values.interestRate}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="dateOfAcquirement">
              <Form.Label>{t("section.asset.form.acquiringDate")}</Form.Label>
              <Form.Control
                type="date"
                name="dateOfAcquirement"
                value={values.dateOfAcquirement}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>{t("section.asset.form.description")}</Form.Label>
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
            {t("section.asset.form.close")}
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {t("section.asset.form.save")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddAssetForm;
