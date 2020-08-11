import React from 'react';
import { Button } from 'controls';

const FieldButton = props => {
    const { onClick, label, value, fieldName } = props;
    return (
        <Button className="field-as-button" onClick={() => { onClick(fieldName, label) }} ariaLabel={label} >
            <span className="field-label">{label}</span>
            <span className="field-value">{value || `--`}</span>
        </Button>
    )
}

export default FieldButton;