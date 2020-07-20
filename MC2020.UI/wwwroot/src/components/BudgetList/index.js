import React, { useState } from 'react';
import './__.scss';

const BudgetList = props => {
    const { data } = props;
    const [income, setIncome] = useState(0);

    const formatPercent = value => `${value * 100}%`;
    const formatDollar = value => `$${value.toFixed(2)}`;
    
    const handleChange = e => { setIncome(e.target.value) };

    return (
        <div className="budget-list max-width-tablet">

            <input className="input" value={income} onChange={handleChange} />

            {data.map((item, key) =>
                <div className="budget-item flex space-betweeen align-center" key={key}>
                    <span>{item.title}</span>
                    <span>{formatPercent(item.percentage)}</span>
                    <span>{formatDollar(item.percentage * income)}</span>
                </div>
            )}
        </div>
    )
}

export default BudgetList