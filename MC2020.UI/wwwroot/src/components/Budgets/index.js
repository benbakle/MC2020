import React, { useState, useEffect } from 'react';
import { formatDollar, formatPercent } from 'libraries/numbers';
import { useNotify } from 'services/notify';
import { useTransactions } from 'services/transaction';
import './__.scss';

const Budgets = props => {
    const { data } = props;
    const [totalIncome, setTotalIncome] = useState(1);
    const [budgetTotals, setBudgetTotals] = useState([]);
    const { transactions } = useTransactions();
    const { notify } = useNotify();
    
    const handleClick = () => { notify(`Food : ${formatPercent(data.filter(b => b.title === "Food")[0].percentage)}`); }

    return (
        <div className="budget-list max-width-tablet">
            {
                data?.map((item, key) =>
                    <div className="budget-item flex space-betweeen align-center" key={key}>
                        <span>{item.title}</span>
                        <span>{formatPercent(item.percentage)}</span>
                        <span> {
                        /*formatPercent(budgetTotals[key] / (item.percentage * totalIncome))*/}</span>
                    </div>
                )}

            { /*remove and use transactions between dates*/}

            <button onClick={handleClick}>Notify</button>
        </div>
    )
}
//<input type="number" className="input" value={totalIncome} onChange={handleChange} />

export default Budgets