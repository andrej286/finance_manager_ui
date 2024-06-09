import React, {useCallback, useState} from 'react';
import styled from "styled-components";
import {deleteAsset, updateAsset} from "../../api/http-utils/assets";
import {Image, OverlayTrigger, Tooltip} from "react-bootstrap";
import EditAssetForm from "./edit-asset-form";
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

export const AssetsTable = ({assets, onSuccess}) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);
  const {t} = useTranslation();

  const handleDeleteAsset = useCallback(async (id) => {
    await deleteAsset(id)
    onSuccess()
  }, [onSuccess]);

  const handleEditAsset = (asset) => {
    setSelectedAsset(asset);
    setShowEditModal(true);
  };

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setSelectedAsset({
      ...selectedAsset,
      [name]: value,
    });
  };

  const handleCloseEditModal = () => {
    setSelectedAsset(null);
    setShowEditModal(false);
  };

  const handleSubmitEditModal = async () => {
    await updateAsset(selectedAsset.id, selectedAsset);
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
          <StyledTableHeader>{t('section.asset.table.name')}</StyledTableHeader>
          <StyledTableHeader>{t('section.asset.table.value')}</StyledTableHeader>
          <StyledTableHeader>{t('section.asset.table.acquiringDate')}</StyledTableHeader>
          <StyledTableHeader>{t('section.asset.table.interest')}</StyledTableHeader>
          <StyledTableHeader>{t('section.asset.table.actions')}</StyledTableHeader>
        </StyledTableRow>
        </thead>
        <tbody>
        {assets.map((asset) => (
          <StyledTableRow key={asset.id}>
            <StyledTableCell>
              {asset.name}
              {asset.description &&
                <OverlayTrigger key="top" placement="top" overlay={<Tooltip>{asset.description}</Tooltip>}>
                  <Image width="22" src="/images/info-icon.svg" roundedCircle fluid className="ms-1"/>
                </OverlayTrigger>
              }
            </StyledTableCell>
            <StyledTableCell>{formatNumber(asset.value, t('currency'))}</StyledTableCell>
            <StyledTableCell>{formatDate(asset.dateOfAcquirement)}</StyledTableCell>
            <StyledTableCell>{asset.interestRate} %</StyledTableCell>
            <StyledTableCell>
              <EditButton onClick={() => handleEditAsset(asset)}/>
              <DeleteButton onClick={() => handleDeleteAsset(asset.id)}/>
            </StyledTableCell>
          </StyledTableRow>
        ))}
        </tbody>
      </StyledTable>
      <EditAssetForm
        show={showEditModal}
        asset={selectedAsset}
        onHide={handleCloseEditModal}
        onChange={handleInputChange}
        onSubmit={handleSubmitEditModal}
      />
    </>
  );
};