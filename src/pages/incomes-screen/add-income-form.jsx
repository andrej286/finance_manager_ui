import React from 'react';
import { Form, Field } from 'react-final-form';
import {createIncome} from "../../api/http-utils/incomes";

const AddIncomeForm = ({ onSuccess }) => {
  const handleSubmit = async (values) => {
    await createIncome(values);
    onSuccess()
  };

  return (
    <Form
      onSubmit={handleSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <Field name="name" component="input" type="text" />
          </div>
          <div>
            <label>Annual Monthly Value:</label>
            <Field name="annualMonthlyValue" component="input" type="number" />
          </div>
          <div>
            <label>Start Date:</label>
            <Field name="startDate" component="input" type="date" />
          </div>
          <div>
            <label>Termination Date:</label>
            <Field name="terminationDate" component="input" type="date" />
          </div>
          <div>
            <label>Interest Rate:</label>
            <Field name="interestRate" component="input" type="number" />
          </div>
          <button type="submit">Add Income</button>
        </form>
      )}
    />
  );
};

export default AddIncomeForm;
