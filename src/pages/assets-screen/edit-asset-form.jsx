import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import {useTranslation} from "react-i18next";

const EditAssetForm = ({ show, asset, onHide, onChange, onSubmit }) => {
  const {t} = useTranslation();

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{t("section.asset.form.editTitle")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {asset && (
          <Form>
            <Form.Group controlId="name">
              <Form.Label>{t("section.asset.form.name")}</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={asset.name}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="value">
              <Form.Label>{t("section.asset.form.value")}</Form.Label>
              <Form.Control
                type="number"
                name="value"
                value={asset.value}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="interestRate">
              <Form.Label>{t("section.asset.form.interest")}</Form.Label>
              <Form.Control
                type="text"
                name="interestRate"
                value={asset.interestRate}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="dateOfAcquirement">
              <Form.Label>{t("section.asset.form.acquiringDate")}</Form.Label>
              <Form.Control
                type="date"
                name="dateOfAcquirement"
                value={asset.dateOfAcquirement}
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>{t("section.asset.form.description")}</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={asset.description}
                onChange={onChange}
              />
            </Form.Group>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          {t("section.asset.form.close")}
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          {t("section.asset.form.save")}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditAssetForm;
