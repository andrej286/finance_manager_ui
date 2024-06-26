import React, {useCallback, useState} from 'react';
import styled from "styled-components";
import {deleteGoal, updateGoal} from "../../api/http-utils/goals";
import {Image, OverlayTrigger, Tooltip} from "react-bootstrap";
import EditGoalForm from "./edit-goal-form";
import {DeleteButton} from "../../components/delete-button";
import {EditButton} from "../../components/edit-button";
import {useTranslation} from "react-i18next";
import {formatNumber} from "../../common/util";

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

export const GoalsTable = ({goals, onSuccess}) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const {t} = useTranslation();

  const handleDeleteGoal = useCallback(async (id) => {
    await deleteGoal(id)
    onSuccess()
  }, [onSuccess]);

  const handleEditGoal = (goal) => {
    setSelectedGoal(goal);
    setShowEditModal(true);
  };

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setSelectedGoal({
      ...selectedGoal,
      [name]: value,
    });
  };

  const handleCloseEditModal = () => {
    setSelectedGoal(null);
    setShowEditModal(false);
  };

  const handleSubmitEditModal = async () => {
    await updateGoal(selectedGoal.id, selectedGoal);
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
          <StyledTableHeader>{t("section.goal.table.name")}</StyledTableHeader>
          <StyledTableHeader>{t("section.goal.table.amount")}</StyledTableHeader>
          <StyledTableHeader>{t("section.goal.table.dateOfOccurrence")}</StyledTableHeader>
          <StyledTableHeader>{t("section.goal.table.type")}</StyledTableHeader>
          <StyledTableHeader>{t("section.goal.table.actions")}</StyledTableHeader>
        </StyledTableRow>
        </thead>
        <tbody>
        {goals.map((goal) => (
          <StyledTableRow key={goal.id}>
            <StyledTableCell>
              {goal.name}
              {goal.description &&
                <OverlayTrigger key="top" placement="top" overlay={<Tooltip>{goal.description}</Tooltip>}>
                  <Image width="22" src="/images/info-icon.svg" roundedCircle fluid className="ms-1"/>
                </OverlayTrigger>
              }
            </StyledTableCell>
            <StyledTableCell>{formatNumber(goal.amount, t('currency'))}</StyledTableCell>
            <StyledTableCell>{formatDate(goal.dateOfOccurrence)}</StyledTableCell>
            <StyledTableCell>{t(`section.goal.type.${goal.goalType}`)}</StyledTableCell>
            <StyledTableCell>
              <EditButton onClick={() => handleEditGoal(goal)}/>
              <DeleteButton onClick={() => handleDeleteGoal(goal.id)}/>
            </StyledTableCell>
          </StyledTableRow>
        ))}
        </tbody>
      </StyledTable>
      <EditGoalForm
        show={showEditModal}
        goal={selectedGoal}
        onHide={handleCloseEditModal}
        onChange={handleInputChange}
        onSubmit={handleSubmitEditModal}
      />
    </>
  );
};