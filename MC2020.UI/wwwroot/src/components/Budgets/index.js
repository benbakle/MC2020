import React from 'react';
import { useBudget } from 'services/budget';
import BudgetSelector from './BudgetSelector';
import { useTransactions } from 'services/transaction';
import { Currency, Percent } from 'controls';
import Chart from 'controls/Chart';

const Budgets = props => {
    const { budgets, income } = useBudget();
    const { budgetTotalById } = useTransactions();

    const percentOfBudget = id => Math.abs(budgetTotalById(id) / income)
    const onBudgetPercent = (id, percent) => percent - percentOfBudget(id);
    const budgetDifference = (id, percent) => (income * percent) + budgetTotalById(id);

    const usedDollarAmount = () => {
        if (budgets?.length > 0 && budgetTotalById)
            return budgets?.map(i => budgetTotalById(i.id)).reduce((acc, value) => acc + value);
    }

    return (
        <div className="budgets card space-between align-center">
            <h1>Budget</h1>
            <Chart
                data={[100,
                    ((usedDollarAmount() / income) * -1) * 100
                ]}
            />
            <Percent value={(-1 - (usedDollarAmount() / income)) * -1} decimals={2} />
            <span> of your monthly budget is left.</span>
            <Currency value={income + usedDollarAmount()} />
            {
                budgets?.map((item, key) =>
                    <button className="button budget-item table-row space-betweeen" key={key}>

                        <div>{item.title}</div>
                        <Percent value={item.percentage} decimals={0} />
                        <Currency value={budgetTotalById(item.id)} />
                        <Currency value={budgetDifference(item.id, item.percentage)} />
                        <Percent value={percentOfBudget(item.id)} />
                        <Percent value={onBudgetPercent(item.id, item.percentage)} decimals={2} />
                    </button>
                )}

        </div>
    )
}
export default Budgets

export {
    BudgetSelector,
}