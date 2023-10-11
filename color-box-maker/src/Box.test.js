import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Box from './Box';

// smoke test
it('renders without crashing', () => {
  render (<Box color='red' width={150} height={150}/>);
});

// snapshot test
it('matches snapshot', () => {
  const {asFragment} = render(<Box color='red' width={150} height={150}/>);
  expect(asFragment()).toMatchSnapshot();
});

it('should remove box and button when X btn is clicked', () => {
  const {queryByText} = render(<Box color='red' width={150} height={150}/>);
  const btn = queryByText("X");
  expect(queryByText('red')).toBeInTheDocument(); // red and blue box are initial state
  fireEvent.click(btn); // removes box
  expect(queryByText('red')).not.toBeInTheDocument();
});