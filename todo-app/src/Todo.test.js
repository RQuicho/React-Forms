import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Todo from './Todo';

// smoke test
it('renders without crashing', () => {
  render(<Todo task='example task'/>);
});

// snapshot test
it('matches snapshot', () => {
  const {asFragment} = render (<Todo task='example task' />);
  expect(asFragment()).toMatchSnapshot();
});

it('should remove box and button when X btn is clicked', () => {
  const {queryByText} = render(<Todo task='example task' />);
  const btn = queryByText("X");
  expect(queryByText('example task')).toBeInTheDocument();
  fireEvent.click(btn); // removes box
  expect(queryByText('example task')).not.toBeInTheDocument();
});