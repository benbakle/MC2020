import React from 'react';
import 'controls/Fields/__.scss';

const Select = props => {
    const { name, className, value, onChange, ariaLabel, disabled, data, valueProperty, descriptionProperty } = props;

    const mappedData = () => {
        let _data = [];

        for (let d = 0; d < data?.length; d++) {
            _data.push({ value: data[d][valueProperty || "value"], description: data[d][descriptionProperty || "description"] })
        }
        return _data;
    }

    return (
        <div className="select-wrapper">
            <select
                type='input'
                name={name}
                className={`select ${className}`}
                value={value}
                onChange={onChange}
                aria-label={ariaLabel}
                disabled={disabled} >

                {props.children}
                {
                    data && mappedData()?.map((item, key) =>
                        <option key={key} value={item.value}>{item.description}</option>
                    )
                }
            </select>
        </div>
    )
}

export default Select