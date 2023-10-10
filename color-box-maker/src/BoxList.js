import {React, useState} from 'react';
import {v4 as uuid} from 'uuid';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

const BoxList = () => {
  const INITIAL_STATE = [
    {id: uuid(), color: 'red', width: 150, height: 150},
    {id: uuid(), color: 'blue', width: 150, height: 150}
  ]
  const [boxes, setBoxes] = useState(INITIAL_STATE);
  const addBox = (newBox) => {
    setBoxes(boxes => [...boxes, {...newBox, id: uuid()}])
  }
  return (
    <div>
      <h3>Color Box Maker</h3>
      <NewBoxForm addBox={addBox} />
      <div>
        {boxes.map(({id, color, width, height}) => <Box color={color} width={Number(width)} height={Number(height)} key={id}/>)}
      </div>
    </div>
  )
}

export default BoxList;