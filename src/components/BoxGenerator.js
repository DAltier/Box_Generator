import React, { useState } from 'react';
import { MyForm, FormInput, FormLabel, FormInputs, MyButton } from './Style.js';

import BoxPlace from './BoxPlace';

const BoxGenerator = (props) => {
  const [colorful, setColorful] = useState({color: ""});
  const [lengthLimit, setLengthLimit] = useState({length: ""});
  const [boxState, setBoxState] = useState({boxes: []});

  const onChangeHandler = e => {
    setColorful({
      ...colorful,
      [e.target.name]: e.target.value
    })
    setLengthLimit({
      ...lengthLimit,
      [e.target.name]: e.target.value
    })
  }

  const onSubmitHandler = e => {
    e.preventDefault();

    const box = [colorful.color, lengthLimit.length];

    let boxesCopy = boxState.boxes.slice();
    boxesCopy.push(box);

    setBoxState({
      boxes: boxesCopy
    });
    setColorful({
      color: ""
    });
    setLengthLimit({
      length: ""
    });
  }
  return (
    <div>
      <MyForm onSubmit={onSubmitHandler}>
        <FormInput>
          <FormLabel htmlFor="color">Color:</FormLabel>
          <FormInputs type="text" name="color" value={colorful.color} onChange={onChangeHandler} />
        </FormInput>
        <FormInput>
          <FormLabel htmlFor="length">Length:</FormLabel>
          <FormInputs type="number" name="length" value={lengthLimit.length} onChange={onChangeHandler} />
        </FormInput>
        <MyButton type="submit">Add Box</MyButton>
      </MyForm>
      <BoxPlace box={boxState}/>
    </div>
  );
}

export default BoxGenerator;