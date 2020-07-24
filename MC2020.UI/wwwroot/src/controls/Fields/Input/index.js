import React from 'react';

const Input = props => {
    const { className, value, onChange, ariaLabel, disabled } = props;
    return (
            <input
                type='input'
                className={className}
                value={value}
                onChange={onChange}
                aria-label={ariaLabel}
                disabled={disabled} />
    )
}

export default Input