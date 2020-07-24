import React from 'react';
import './__.scss';

const Select = props => {
    const { className, value, onChange, ariaLabel, disabled, data } = props;

    return (
        <select
            type='input'
            className={className}
            value={value}
            onChange={onChange}
            aria-label={ariaLabel}
            disabled={disabled} >

            {
                data?.map((item, key) =>
                    <option key={key} value={item.value}>{item.description}</option>
                )
            }

        </select>
    )
}

export default Select