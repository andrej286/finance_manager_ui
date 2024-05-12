import React, {useCallback, useState} from 'react';
import styled from "styled-components";
import {deleteCost, updateCost} from "../../api/http-utils/costs";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import EditCostForm from "./edit-cost-form";
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

export const CostsTable = ({costs, onSuccess}) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedCost, setSelectedCost] = useState(null);

  const handleDeleteCost = useCallback(async (id) => {
    await deleteCost(id)
    onSuccess()
  }, [onSuccess]);

  const handleEditCost = (cost) => {
    setSelectedCost(cost);
    setShowEditModal(true);
  };

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setSelectedCost({
      ...selectedCost,
      [name]: value,
    });
  };

  const handleCloseEditModal = () => {
    setSelectedCost(null);
    setShowEditModal(false);
  };

  const handleSubmitEditModal = async () => {
    await updateCost(selectedCost.id, selectedCost);
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
          <StyledTableHeader>Name</StyledTableHeader>
          <StyledTableHeader>Amount</StyledTableHeader>
          <StyledTableHeader>Date of payment</StyledTableHeader>
          <StyledTableHeader>Type</StyledTableHeader>
          <StyledTableHeader>Actions</StyledTableHeader>
        </StyledTableRow>
        </thead>
        <tbody>
        {costs.map((cost) => (
          <StyledTableRow key={cost.id}>
            <StyledTableCell>
              {cost.name}
              {cost.description &&
                <OverlayTrigger key="top" placement="top" overlay={<Tooltip>{cost.description}</Tooltip>}>
                  <span>ℹ️</span>
                </OverlayTrigger>
              }
            </StyledTableCell>
            <StyledTableCell>{cost.amount} €</StyledTableCell>
            <StyledTableCell>{formatDate(cost.dateOfPayment)}</StyledTableCell>
            <StyledTableCell>{cost.costType}</StyledTableCell>
            <StyledTableCell>
              <EditButton onClick={() => handleEditCost(cost)}/>
              <DeleteButton onClick={() => handleDeleteCost(cost.id)}/>
            </StyledTableCell>
          </StyledTableRow>
        ))}
        </tbody>
      </StyledTable>
      <EditCostForm
        show={showEditModal}
        cost={selectedCost}
        onHide={handleCloseEditModal}
        onChange={handleInputChange}
        onSubmit={handleSubmitEditModal}
      />
    </>
  );
};