import React, {useCallback, useState} from 'react';
import styled from "styled-components";
import {deleteIncome, updateIncome} from "../../api/http-utils/incomes";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import EditIncomeForm from "./edit-income-form";
import {DeleteButton} from "../../components/delete-button";
import {EditButton} from "../../components/edit-button";

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
  margin-top: 5px;
  margin-bottom: 50px;
`;

const StyledTableHeader = styled.th`
  background-color: #ff9800;
  color: #fff;
  font-weight: bold;
  padding: 10px;
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
  padding: 5px;
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
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
        <StyledTableHeader>Actions</StyledTableHeader>
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
          <StyledTableCell>{income.annualMonthlyValue} €</StyledTableCell>
          <StyledTableCell>{formatDate(income.startDate)}</StyledTableCell>
          <StyledTableCell>{formatDate(income.terminationDate)}</StyledTableCell>
          <StyledTableCell>{income.interestRate} %</StyledTableCell>
          <StyledTableCell>
            <EditButton onClick={() => handleEditIncome(income)}/>
            <DeleteButton onClick={() => handleDeleteIncome(income.id)}/>
          </StyledTableCell>
        </StyledTableRow>
      ))}
      </tbody>
    </StyledTable>
    <EditIncomeForm
      show={showEditModal}
      income={selectedIncome}
      onHide={handleCloseEditModal}
      onChange={handleInputChange}
      onSubmit={handleSubmitEditModal}
    />
    </>
  );
};