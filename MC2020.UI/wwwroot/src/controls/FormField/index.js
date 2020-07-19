import React from 'react';
import './form-field.scss';

const FormField = (props) => {
    const { fieldValue, ariaLabel, className, readOnly } = props;

    if (!ariaLabel)
        return <></>

    return (
        <div className={`form-field${className ? ` ${className}` : ""}`}>
            <label>{ariaLabel}</label>
            {
                !readOnly &&
                <input type="text" aria-label={ariaLabel} value={fieldValue} onChange={() => { return null }} />
            }
            {
                readOnly &&
                <span>{fieldValue}</span>
            }
        </div>
    );
}

export default FormField;