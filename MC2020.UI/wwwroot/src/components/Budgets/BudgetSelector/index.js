import React, { useState } from 'react';
import { Select } from 'controls/Fields';
import { useBudget } from 'services/budget';
import { useNotify } from 'services/notify';

const BudgetSelector = props => {
    const { name, value, onChange } = props;
    const { budget } = useBudget();
    const { notify } = useNotify();

    return (
        <Select data={budget} valueProperty="id" descriptionProperty="title" onChange={onChange} value={value} name={name}>
            <option value="all">All Transactions</option>
            <option value={-1}>Income</option>
        </Select>   
    )
}
export default BudgetSelector