import React from 'react';
import css from './Button.module.css';

function Button({label, onClick, type = 'button'}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={css.button}
        >
            {label}
        </button>
    );
}

export default Button;