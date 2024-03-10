import React from 'react';
import { Form, Field } from 'react-final-form';
import { createGoal } from '../../services/httpUtils';

const goalTypes = [
  'TRAVEL',
  'REALESTATE',
  'CAR',
  'EDUCATION',
  'RETIREMENT',
  'HEALTH',
  'INVESTMENT',
  'BUSINESS',
  'FAMILY',
  'CHARITY',
  'OTHER',
];

const AddGoalForm = ({ onSuccess }) => {
  const handleSubmit = async (values) => {
    await createGoal(values);
    onSuccess()
  };

  return (
    <Form
      onSubmit={handleSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Type:</label>
            <Field name="goalType" component="select">
              {goalTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </Field>
          </div>
          <div>
            <label>Cost:</label>
            <Field name="cost" component="input" type="number" />
          </div>
          <div>
            <label>Date of Occurrence:</label>
            <Field name="dateOfOccurrence" component="input" type="date" />
          </div>
          <div>
            <label>Description:</label>
            <Field name="description" component="textarea" />
          </div>
          <button type="submit">Add Goal</button>
        </form>
      )}
    />
  );
};

export default AddGoalForm;
