import {React, useState} from 'react';
import {v4 as uuid} from 'uuid';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

const TodoList = () => {
  const INITIAL_STATE = [
    {id: uuid(), task: 'clean the car'},
    {id: uuid(), task: 'walk the dog'}
  ]
  const [todos, setTodos] = useState(INITIAL_STATE);
  const addTodo = (newTodo) => {
    setTodos(todos => [...todos, {...newTodo, id: uuid()}])
  }
  return (
    <div>
      <h3>Todo List</h3>
      <NewTodoForm addTodo={addTodo}/>
      <div>
        {todos.map(({id, task}) => <Todo task={task} key={id}/>)}
      </div>   
    </div>
  )
}

export default TodoList;