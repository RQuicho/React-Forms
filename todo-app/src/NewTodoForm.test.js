import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

// smoke test
it('renders without crashing', () => {
  render(<NewTodoForm addTodo={() => {}}/>);
});

// snapshot test
it('matches snapshot', () => {
  const {asFragment} = render (<NewTodoForm addTodo={() => {}}/>);
  expect(asFragment()).toMatchSnapshot();
});

it('should handleChange when inputing data', () => {
  const {getByLabelText} = render(<NewTodoForm addTodo={() => {}}/>);
  const taskInput = getByLabelText('Task');
  fireEvent.change(taskInput, {target: {value: 'example task'}});
  expect(taskInput).toHaveValue('example task');
});

it('should handleSubmit when submitting form', () => {
  const {getByLabelText, queryByText} = render(<NewTodoForm addTodo={() => {}}/>);
  const taskInput = getByLabelText('Task');
  const btn = queryByText('Add Task');

  fireEvent.change(taskInput, {target: {value: 'example task'}});
  expect(taskInput).toHaveValue('example task');

  fireEvent.click(btn);
  expect(taskInput).toHaveValue('');
});