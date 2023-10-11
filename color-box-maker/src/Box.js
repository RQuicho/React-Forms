import {React, useState} from 'react';
import './Box.css';

const Box = ({color, width, height}) => {
  const [isVisible, setIsVisible] = useState(true);
  const remove = () => {
    setIsVisible(false);
  }
  return (
    <>
    {isVisible && 
      <div className='Box' style={{backgroundColor: color, width: width, height: height}}>
        <p>{color}</p>
      </div>  
    }
    {isVisible &&
      <button className='Box-btn' onClick={remove}>X</button>
    }
    </>
  )
}

export default Box;