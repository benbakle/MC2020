import React from 'react';
import { formatPercent } from 'libraries/numbers';
import { useBudget } from 'services/budget';
import './__.scss';

const Budgets = props => {
    const { budget } = useBudget();

    return (
        <div className="budget-list max-width-tablet">
            {
                budget?.map((item, key) =>
                    <div className="budget-item flex space-betweeen align-center" key={key}>
                        <span>{item.title}</span>
                        <span>{formatPercent(item.percentage)}</span>
                    </div>
                )}
        </div>
    )
}
export default Budgets