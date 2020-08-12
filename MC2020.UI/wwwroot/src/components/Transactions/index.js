import React, { useState, useEffect } from 'react';
import { Date } from 'controls/Fields';
import { useTransactions } from 'services/transaction';
import { BudgetSelector } from 'components/Budgets';
import './__.scss';
import { Currency, Percent } from 'controls';

const Transactions = props => {
    const { transactions } = useTransactions();
    const [filteredTransactions, setFilteredTransactions] = useState();
    const [typeId, setTypeId] = useState("all");
    const [total, setTotal] = useState("all");


    useEffect(() => {
        const _filterTransactions = () => {
            if (typeId === "all")
                return transactions;

            if (typeId * 1 === -1)
                return transactions?.filter(t => !t.budget);

            return transactions?.filter(t => t.budget?.id === typeId)
        }

        const setFilteredTotal = (t) => {
            let _sum = 0;

            for (let i = 0; i < t?.length; i++)
                _sum = _sum + t[i].amount;

            console.log(_sum)
            setTotal(_sum);
        }

        setFilteredTransactions(_filterTransactions())
        setFilteredTotal(_filterTransactions());

    }, [typeId, transactions])

    const handleSelectBudget = e => {
        const _value = e.target.value;
        setTypeId(e.target.value)
    }

    return (
        <div className="transactions card">
            <h1>Transactions</h1>
            <h2>Total: <Currency value={total} /></h2>

            <BudgetSelector onChange={handleSelectBudget} name="budget" value={typeId} />


            {
                filteredTransactions?.map((item, key) =>
                    <div className="transaction table-row space-between" key={key}>
                        <Date date={item.date} readOnly />
                        <div>{item.description}</div>

                        {
                            //<div>{item.reference}</div>
                            //<div>{item.cleared ? "cleared" : "pending..."}</div>
                        }

                        <div>
                            {
                                item.budget
                                    ? <>{item.budget.title} (<Percent value={item.budget.percentage} />)</>
                                    : "Income"
                            }
                        </div>
                        <div>
                            <Currency value={item.amount} />
                        </div>
                    </div>
                )}
        </div>
    )
}

export default Transactions