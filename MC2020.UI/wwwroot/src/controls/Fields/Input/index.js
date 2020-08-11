import React from 'react';

const Input = props => {
    const { name, className, value, onChange, ariaLabel, disabled, placeholder } = props;

    return (
        <div className="input-wrapper">
            <input
                name={name}
                type='input'
                className={className}
                value={value}
                onChange={onChange}
                aria-label={ariaLabel}
                disabled={disabled}
                placeholder={placeholder} />
        </div>
    )
}

export default Input