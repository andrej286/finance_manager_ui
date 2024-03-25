import React from 'react';
import {Field, Form} from 'react-final-form';
import {createAsset} from "../../api/http-utils/assets";

const AddAssetForm = ({ onSuccess }) => {
  const handleSubmit = async (values) => {
    await createAsset(values);
    onSuccess()
  };

  return (
    <Form
      onSubmit={handleSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Description:</label>
            <Field name="description" component="textarea" />
          </div>
          <div>
            <label>Value:</label>
            <Field name="value" component="input" type="number" />
          </div>
          <button type="submit">Add Asset</button>
        </form>
      )}
    />
  );
};

export default AddAssetForm;
