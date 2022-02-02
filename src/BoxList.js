import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import './BoxList.css';

const BoxList = () => {
    const [boxes,setBoxes] = useState([]);
    const boxComponents = boxes.map(({id, backgroundColor, width, height}) => {
        return <Box key={id} deleteBox={() => deleteBox(id)} backgroundColor={backgroundColor} width={width} height={height} />
    });

    const deleteBox = (id) => {
        setBoxes(boxes.filter((box) => box.id !== id ));
    };

    const addBox = (newBox) => {
        const id = uuid();
        setBoxes([...boxes, {id: id, backgroundColor: newBox.backgroundColor, width: newBox.width, height: newBox.height}]);
    };

    return (
        <div className="BoxList">
            <ul>
                {boxComponents}
            </ul>
            <NewBoxForm addBox={addBox} />
        </div>
    )
};

export default BoxList;