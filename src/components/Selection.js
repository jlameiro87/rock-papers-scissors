import React from 'react';
import { Image } from 'semantic-ui-react';

function Selection(props) {
  const selectOption = () => {
    props.setOption(props.option);
  }

  return (
    <Image onClick={selectOption} className="image-selection" src={props.image} size='small' />
  )
}

export default Selection;