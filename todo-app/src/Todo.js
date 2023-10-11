import {React, useState} from 'react';
// import './Todo.css';

const Todo = ({task}) => {
  const [isVisible, setIsVisible] = useState(true);
  const remove = () => {
    setIsVisible(false);
  }
  return (
    <>
    {isVisible &&
      <div className='Todo'>
        <p>{task}</p>
        <button onClick={remove}>X</button>
      </div>
    }
    </>
  )
}

export default Todo;