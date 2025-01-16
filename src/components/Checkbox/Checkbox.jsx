import React, {useState} from 'react';
import clsx from "clsx";
import css from './Checkbox.module.css';
import {useSelector} from "react-redux";

function Checkbox({label, image, onChange, name}) {
    const isChecked = useSelector((state) => state.filter[name]);

    const handleToggle = () => {
        onChange(!isChecked);
    };

    return (
        <button
            type="button"
            onClick={handleToggle}
            className={clsx(css.checkbox, {
                [css.checked]: isChecked
            })}
        >
            <img src={image} alt={label}/>
            <span>{ label }</span>
        </button>
    );
}

export default Checkbox;