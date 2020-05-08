import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        {/* Below is less button with added functionality */}
    <button 
        className={classes.Less} 
        onClick={props.removed} 
        disabled={props.disabled}>Less
    </button>
        {/* Below is more button with added functionality */}
    <button 
        className={classes.More} 
        onClick={props.added}>More
    </button>
  </div>
);



export default buildControl;