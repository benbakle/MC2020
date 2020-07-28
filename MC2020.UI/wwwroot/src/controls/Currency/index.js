import React from 'react';
import './__.scss';

const Currency = props => {
    const { value } = props
    return (
        <span className={`currency${value < 0 ? ' negative' : ""}`}>
            {value < 0 && '-'}${Math.abs(value).toFixed(2)}
        </span>
    )
}

export default Currency