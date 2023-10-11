import React from 'react';
import {render, fireEvent} from '@testing-library/react';

// smoke test
it('renders without crashing', () => {
  render(<Todo task='example task'/>);
});

// snapshot test
it('matches snapshot', () => {
  const {asFragment} = render (<Todo task='example task' />);
  expect(asFragment()).toMatchSnapshot();
});