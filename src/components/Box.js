import React from 'react';

import "./Box.css";

export const Box = ({ value, onClick }) => {
    let style;
    if (value === "X") {
      style = "box x";
    } else {
      style = "box o";
    }
    return (
        <button className={style} onClick={onClick}>{value}</button>
    )
}
