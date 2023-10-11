import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

// smoke test
it('renders without crashing', () => {
  render (<NewBoxForm />);
})

// snapshot test
it('matches snapshot', () => {
  const {asFragment} = render(<NewBoxForm addBox={() => {}}/>);
  expect (asFragment()).toMatchSnapshot();
})

it('should handleChange when inputing data', () => {
  const {getByLabelText} = render(<NewBoxForm addBox={() => {}} />);

  const colorInput = getByLabelText('Color');
  const widthInput = getByLabelText('Width');
  const heightInput = getByLabelText('Height');

  fireEvent.change(colorInput, {target: {value: 'yellow'}});
  fireEvent.change(widthInput, {target: {value: 200}});
  fireEvent.change(heightInput, {target: {value: 150}});

  expect(colorInput).toHaveValue('yellow');
  expect(widthInput).toHaveValue(200);
  expect(heightInput).toHaveValue(150);
});

it('should handleSubmit when submitting form', () => {
  const {getByLabelText, queryByText} = render(<NewBoxForm addBox={() => {}} />);

  const colorInput = getByLabelText('Color');
  const widthInput = getByLabelText('Width');
  const heightInput = getByLabelText('Height');
  const btn = queryByText('Add Box');

  fireEvent.change(colorInput, {target: {value: 'yellow'}});
  fireEvent.change(widthInput, {target: {value: 200}});
  fireEvent.change(heightInput, {target: {value: 150}});

  expect(colorInput).toHaveValue('yellow');
  expect(widthInput).toHaveValue(200);
  expect(heightInput).toHaveValue(150);

  fireEvent.click(btn);
  expect(colorInput).toHaveValue('');
  expect(widthInput).toHaveValue(null);
  expect(heightInput).toHaveValue(null);
});

