import React, { useState } from 'react';
import { formatDollar, formatPercent } from 'libraries/numbers';
import { Date } from 'controls';
import { Select } from 'controls/Fields';
import { useTransactions } from 'services/transaction';
import './__.scss';

const Transactions = props => {
    const { transactions } = useTransactions([]);
    const [budget, setBudget] = useState();

    const filteredTransactions = () => {
        if (!budget)
            return transactions

        if (budget === "income")
            return transactions?.filter(t => t.budget === null);

        return transactions?.filter(t => t.budget?.title === budget)
    }

    const handleSelectBudget = e => {
        setBudget(e.target.value)
    }

    return (
        <>
            <Select className="select" onChange={handleSelectBudget} value={budget}
                data={[
                    { value: "", description: "All Transactions" },
                    { value: "income", description: "Income" },
                    { value: "Food", description: "Food" }
                ]} />
          
            {
                filteredTransactions()?.map((item, key) =>
                    <div className="transactions flex align-center space-between max-width-tablet" key={key}>
                        <span><Date date={item.date} readOnly /></span>
                        <span>{item.description}</span>
                        <span>{item.reference}</span>
                        <span>{item.cleared ? "cleared" : "pending..."}</span>
                        <span>
                            {
                                item.budget
                                    ? `${item.budget.title} (${formatPercent(item.budget.percentage)})`
                                    : "income"
                            }
                        </span>

                        <span>{formatDollar(item.amount)}</span>
                    </div>
                )
            }
        </>
    )
}

export default Transactions