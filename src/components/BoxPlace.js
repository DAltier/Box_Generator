import React from 'react';
import { BoxCreate, BoxColor } from './BoxStyle.js';

const BoxPlace = ({box}) => {
  return (
    <BoxCreate>
      {box.boxes.map(function (box, i) {
        let styles = {
          backgroundColor: box[0],
          width: box[1] + "px",
          height: box[1] + "px"
        }
        console.log(box[0]);
        console.log(box[1]);
        return <BoxColor key={i} style={styles}></BoxColor>
      })}
    </BoxCreate>
  )
}

export default BoxPlace;