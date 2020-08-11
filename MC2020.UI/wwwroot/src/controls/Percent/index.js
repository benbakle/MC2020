import React from 'react';

const Percent = props => {
    const { value, decimals } = props

    return (
        <span className={`percent${value < 0 ? ' negative' : ""}`}>
            {value < 0 && '-'}{Math.abs(value * 100).toFixed(!decimals ? 0 : 2)}%
        </span>
    )
}

export default Percent