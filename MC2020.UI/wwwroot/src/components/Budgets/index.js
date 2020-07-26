import React from 'react';
import { formatPercent } from 'libraries/numbers';
import { useBudget } from 'services/budget';
import BudgetSelector from './BudgetSelector';
import { useTransactions } from 'services/transaction';

const Budgets = props => {
    const { budgets, income } = useBudget();
    const { budgetTotalById } = useTransactions();

    const percentOfBudget = id => {
        return Math.abs(budgetTotalById(id) / income).toFixed(2);
    }

    const onBudgetPercent = (id, percent) => {
        return percent - percentOfBudget(id);
    }

    return (
        <div className="budgets card">
            <h1>Budget</h1>
            {
                budgets?.map((item, key) =>
                    <div className="budget-item table-row space-betweeen" key={key}>
                        <div>{item.title}</div>
                        <div>{formatPercent(item.percentage)}</div>
                        <div>{budgetTotalById(item.id)}</div>
                        <div>{formatPercent(percentOfBudget(item.id))}</div>
                        <div>{formatPercent(onBudgetPercent(item.id, item.percentage))}</div>
                    </div>
                )}
        </div>
    )
}
export default Budgets

export {
    BudgetSelector,
}