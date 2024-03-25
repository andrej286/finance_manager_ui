import React, {useCallback} from 'react';
import styled from "styled-components";
import {deleteGoal} from "../../api/http-utils/goals";

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

export const GoalsTable = ({ goals, onDelete }) => {

  const handleDeleteGoal = useCallback(async (id) => {
    await deleteGoal(id)
    onDelete()
  }, []);

  return (
    <StyledTable>
      <thead>
      <StyledTableRow>
        <StyledTableHeader>Cost</StyledTableHeader>
        <StyledTableHeader>Date of Occurrence</StyledTableHeader>
        <StyledTableHeader>Description</StyledTableHeader>
        <StyledTableHeader>Type</StyledTableHeader>
        <StyledTableHeader>Action</StyledTableHeader>
      </StyledTableRow>
      </thead>
      <tbody>
      {goals.map((goal) => (
        <StyledTableRow key={goal.id}>
          <StyledTableCell>{goal.cost}</StyledTableCell>
          <StyledTableCell>{goal.dateOfOccurrence}</StyledTableCell>
          <StyledTableCell>{goal.description}</StyledTableCell>
          <StyledTableCell>{goal.goalType}</StyledTableCell>
          <StyledTableCell>
            <button onClick={() => handleDeleteGoal(goal.id)}>Delete</button>
          </StyledTableCell>
        </StyledTableRow>
      ))}
      </tbody>
    </StyledTable>
  );
};