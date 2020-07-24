import React from 'react';
import { formatPercent } from 'libraries/numbers';
import { useNotify } from 'services/notify';
import { useBudget } from 'services/budget';
import './__.scss';

const Budgets = props => {
    const { budget } = useBudget();
    const { notify } = useNotify();
    
    const handleClick = () => { notify(`Food : ${budget && budget[0].percentage}`); }

    return (
        <div className="budget-list max-width-tablet">
            {
                budget?.map((item, key) =>
                    <div className="budget-item flex space-betweeen align-center" key={key}>
                        <span>{item.title}</span>
                        <span>{formatPercent(item.percentage)}</span>
                    </div>
                )}

            <button onClick={handleClick}>Notify</button>
        </div>
    )
}
export default Budgets