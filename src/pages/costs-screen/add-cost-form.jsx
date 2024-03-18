import React from 'react';
import { Form, Field } from 'react-final-form';
import {createCost} from '../../services/httpUtils';

const costTypes = [
  'ONE_TIME',
  'MONTHLY',
  'YEARLY',
];

const AddCostForm = ({ onSuccess }) => {
  const handleSubmit = async (values) => {
    await createCost(values);
    onSuccess()
  };

  return (
    <Form
      onSubmit={handleSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Type:</label>
            <Field name="costType" component="select">
              {costTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Field>
          </div>
          <div>
            <label>Amount:</label>
            <Field name="amount" component="input" type="number" />
          </div>
          <div>
            <label>Date of Payment:</label>
            <Field name="dateOfPayment" component="input" type="date" />
          </div>
          <div>
            <label>Description:</label>
            <Field name="description" component="textarea" />
          </div>
          <button type="submit">Add Cost</button>
        </form>
      )}
    />
  );
};

export default AddCostForm;
