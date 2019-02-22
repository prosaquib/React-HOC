import React from 'react';
import stylesWrapper from '../HOC/stylesWrapper';

const ButtonOne = (props) => {
    return (
        <button style = {props.styles} >Please hit Me!</button>  
    )
}

export default stylesWrapper(ButtonOne);