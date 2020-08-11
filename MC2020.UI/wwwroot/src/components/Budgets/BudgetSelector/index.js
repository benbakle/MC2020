import React from 'react';
import { Select } from 'controls/Fields';
import { useBudget } from 'services/budget';

const BudgetSelector = props => {
    const { name, value, onChange } = props;
    const { budgets } = useBudget();

    return (
        <Select data={budgets} valueProperty="id" descriptionProperty="title" onChange={onChange} value={value} name={name}>
            <option value="all">All Transactions</option>
            <option value={-1}>Income</option>
        </Select>
    )
}
export default BudgetSelector