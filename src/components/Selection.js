import React from 'react';
import { Image } from 'semantic-ui-react';

function Selection(props) {
  const selectOption = () => {
    props.setOption(props.option);
  }

  const getImage = () => {
    let imgPath = '';
    switch (props.option) {
      case "PAPER":
        imgPath = "../img/paper.png";
        break;
      case "ROCK":
        imgPath = "../img/rock.png";
        break;
      case "SCISSORS":
        imgPath = "../img/scissors.png";
        break;
      default:
        break;
    }
    return imgPath;
  }

  return (
    <Image onClick={selectOption} className="image-selection" src={getImage()} size='small' />
  )
}

export default Selection;