import {React, useState} from 'react';

const Box = ({color, width, height}) => {
  const [isVisible, setIsVisible] = useState(true);
  const remove = () => {
    setIsVisible(false);
  }
  return (
    <>
    {isVisible && 
      <div style={{backgroundColor: color, width: width, height: height}}>
        <p>{color}</p>
      </div>  
    }
    {isVisible &&
      <button onClick={remove}>X</button>
    }
    </>
  )
}

export default Box;