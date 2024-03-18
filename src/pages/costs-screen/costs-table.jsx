import React, {useCallback} from 'react';
import styled from "styled-components";
import {deleteCost} from "../../services/httpUtils";

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

export const CostsTable = ({ costs, onDelete }) => {

  const handleDeleteCost = useCallback(async (id) => {
    await deleteCost(id)
    onDelete()
  }, [onDelete]);
  console.log('these are the costs : ', costs)

  return (
    <StyledTable>
      <thead>
      <StyledTableRow>
        <StyledTableHeader>Amount</StyledTableHeader>
        <StyledTableHeader>Type</StyledTableHeader>
        <StyledTableHeader>Date of payment</StyledTableHeader>
        <StyledTableHeader>Description</StyledTableHeader>
        <StyledTableHeader>Action</StyledTableHeader>
      </StyledTableRow>
      </thead>
      <tbody>
      {costs.map((cost) => (
        <StyledTableRow key={cost.id}>
          <StyledTableCell>{cost.amount}</StyledTableCell>
          <StyledTableCell>{cost.costType}</StyledTableCell>
          <StyledTableCell>{cost.dateOfPayment}</StyledTableCell>
          <StyledTableCell>{cost.description}</StyledTableCell>
          <StyledTableCell>
            <button onClick={() => handleDeleteCost(cost.id)}>Delete</button>
          </StyledTableCell>
        </StyledTableRow>
      ))}
      </tbody>
    </StyledTable>
  );
};