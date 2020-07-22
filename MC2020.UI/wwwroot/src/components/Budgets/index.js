import React, { useState } from 'react';
import { formatDollar, formatPercent } from 'libraries/numbers';
import { useNotify } from 'services/notify';
import './__.scss';

const Budgets = props => {
    const { data } = props;
    const [income, setIncome] = useState(0);
    const { notify } = useNotify();

    const handleChange = e => { setIncome(e.target.value) };

    const handleClick = () => { notify("Updated Budget!"); }

    return (
        <div className="budget-list max-width-tablet">
            {data.map((item, key) =>
                <div className="budget-item flex space-betweeen align-center" key={key}>
                    <span>{item.title}</span>
                    <span>{formatPercent(item.percentage)}</span>
                    <span>{formatDollar(item.percentage * income)}</span>
                </div>
            )}

            { /*remove and use transactions between dates*/}
            <input type="number" className="input" value={income} onChange={handleChange} />

            <button onClick={handleClick}>Notify</button>
        </div>
    )
}

export default Budgets