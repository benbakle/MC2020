import React from 'react';
import { useBudget } from 'services/budget';
import BudgetSelector from './BudgetSelector';
import { useTransactions } from 'services/transaction';
import { Currency, Percent } from 'controls';

const Budgets = props => {
    const { budgets, income } = useBudget();
    const { budgetTotalById } = useTransactions();

    const percentOfBudget = id => {
        return Math.abs(budgetTotalById(id) / income)
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
                        <Percent value={item.percentage} decimals={0} />
                        <Currency value={budgetTotalById(item.id)} />
                        <Currency value={income * item.percentage}/>
                        <Percent value = {percentOfBudget(item.id)} />
                        <Percent value={onBudgetPercent(item.id, item.percentage)} decimals={2} />
                    </div>
                )}
        </div>
    )
}
export default Budgets

export {
    BudgetSelector,
}