import React from 'react';
import { Image } from 'semantic-ui-react';

function Selection (props) {
    return (
        // <img src="./paper.png" alt=""/>
        <Image src={props.image} size='small' />
    )
}

export default Selection;