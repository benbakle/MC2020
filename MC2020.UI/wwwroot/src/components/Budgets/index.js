import React from 'react';
import { formatPercent } from 'libraries/numbers';
import { useBudget } from 'services/budget';
import BudgetSelector from './BudgetSelector';

const Budgets = props => {
    const { budgets, income } = useBudget();

    return (
        <div className="budget-list">
            <span>Total Income: ${income}</span>
            {
                budgets?.map((item, key) =>
                    <div className="budget-item table-row space-betweeen" key={key}>
                        <div>{item.title}</div>
                        <div>{formatPercent(item.percentage)}</div>
                    </div>
                )}
        </div>
    )
}
export default Budgets

export {
    BudgetSelector,
}