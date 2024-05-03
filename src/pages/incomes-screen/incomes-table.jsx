import React, {useCallback, useState} from 'react';
import styled from "styled-components";
import {deleteIncome, updateIncome} from "../../api/http-utils/incomes";
import {Button, Form, Modal, OverlayTrigger, Tooltip} from "react-bootstrap";

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  color: #333;
  font-family: Arial, sans-serif;
  font-size: 14px;
  text-align: left;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin: auto;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const StyledTableHeader = styled.th`
  background-color: #ff9800;
  color: #fff;
  font-weight: bold;
  padding: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #ccc;
`;

const StyledTableRow = styled.tr`
  &:nth-child(even) td {
    background-color: #f2f2f2;
  }
  &:hover td {
    background-color: #ffedcc;
  }
`;

const StyledTableCell = styled.td`
  background-color: #fff;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  font-weight: bold;
`;

export const IncomesTable = ({ incomes, onSuccess }) => {

  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedIncome, setSelectedIncome] = useState(null);

  const handleDeleteIncome = useCallback(async (id) => {
    await deleteIncome(id)
    onSuccess()
  }, [onSuccess]);

  const handleEditIncome = (income) => {
    setSelectedIncome(income);
    setShowEditModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedIncome({
      ...selectedIncome,
      [name]: value,
    });
  };

  const handleCloseEditModal = () => {
    setSelectedIncome(null);
    setShowEditModal(false);
  };

  const handleSubmitEditModal = async () => {
    await updateIncome(selectedIncome.id, selectedIncome);
    onSuccess();
    handleCloseEditModal();
  };

  return (
    <>
    <StyledTable>
      <thead>
      <StyledTableRow>
        <StyledTableHeader>Name of Income</StyledTableHeader>
        <StyledTableHeader>Annual Monthly Value</StyledTableHeader>
        <StyledTableHeader>Date of Occurrence</StyledTableHeader>
        <StyledTableHeader>Date of Termination</StyledTableHeader>
        <StyledTableHeader>Interest Rate</StyledTableHeader>
        <StyledTableHeader>Action</StyledTableHeader>
      </StyledTableRow>
      </thead>
      <tbody>
      {incomes.map((income) => (
        <StyledTableRow key={income.id}>
          <StyledTableCell>
            {income.name}
            {income.description &&
              <OverlayTrigger key="top" placement="top" overlay={<Tooltip>{income.description}</Tooltip>}>
                <span>ℹ️</span>
              </OverlayTrigger>
            }
          </StyledTableCell>
          <StyledTableCell>{income.annualMonthlyValue}</StyledTableCell>
          <StyledTableCell>{income.startDate}</StyledTableCell>
          <StyledTableCell>{income.terminationDate}</StyledTableCell>
          <StyledTableCell>{income.interestRate}</StyledTableCell>
          <StyledTableCell>
            <Button variant="primary" onClick={() => handleEditIncome(income)}>Edit</Button>
            <Button variant="danger" onClick={() => handleDeleteIncome(income.id)}>Delete</Button>
          </StyledTableCell>
        </StyledTableRow>
      ))}
      </tbody>
    </StyledTable>
    <Modal show={showEditModal} onHide={handleCloseEditModal}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Income</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {selectedIncome && (
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name of Income</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={selectedIncome.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description of Income</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={selectedIncome.description}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="annualMonthlyValue">
              <Form.Label>Annual Monthly Value</Form.Label>
              <Form.Control
                type="text"
                name="annualMonthlyValue"
                value={selectedIncome.annualMonthlyValue}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="startDate">
              <Form.Label>Date of Occurrence</Form.Label>
              <Form.Control
                type="text"
                name="startDate"
                value={selectedIncome.startDate}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="terminationDate">
              <Form.Label>Date of Termination</Form.Label>
              <Form.Control
                type="text"
                name="terminationDate"
                value={selectedIncome.terminationDate}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="interestRate">
              <Form.Label>Interest Rate</Form.Label>
              <Form.Control
                type="text"
                name="interestRate"
                value={selectedIncome.interestRate}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseEditModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmitEditModal}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  );
};