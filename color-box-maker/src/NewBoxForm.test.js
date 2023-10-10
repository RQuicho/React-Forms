import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

// smoke test
it('renders without crashing', () => {
  render (<NewBoxForm />);
})

// snapshot test
it('matches snapshot', () => {
  const {asFragment} = render(<NewBoxForm />);
  expect (asFragment()).toMatchSnapshot();
})