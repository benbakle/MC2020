import React, { useState, useEffect } from 'react';
import { formatDollar, formatPercent } from 'libraries/numbers';
import { Select } from 'controls/Fields';
import { Date, Button } from 'controls';
import { useTransactions } from 'services/transaction';
import { useBudget } from 'services/budget';
import './__.scss';

const Transactions = props => {
    const { transactions, addTransaction } = useTransactions();
    const { budget } = useBudget();

    const [typeId, setTypeId] = useState();
    const [filteredTransactions, setFilteredTransactions] = useState();

    useEffect(() => {
        const _filterTransactions = () => {
            if (!typeId)
                return transactions;

            if (typeId === "income")
                return transactions?.filter(t => t.budget === null);

            return transactions?.filter(t => t.budget?.id === typeId)

        }

        setFilteredTransactions(_filterTransactions())

    }, [typeId, transactions])

    const handleSelectBudget = e => {
        setTypeId(e.target.value)
    }

    const handleAdd = () => {
        addTransaction({
            amount: 300,
            budget: {
                id: "799ab880-1dba-44e5-8fa0-517d31a8bf03",
                percentage: 0.25,
                title: "Housing"
            },
            cleared: false,
            date: "2020-07-21T00:00:00",
            description: "Quicken Loans",
            reference: "SUMONLINE#",

        })
    }

    return (
        <>
            <Select className="select" data={budget} valueProperty="id" descriptionProperty="title" onChange={handleSelectBudget} value={typeId}>
                <option value="">All Transactions</option>
                <option value="income">Income</option>
            </Select>

            <Button onClick={handleAdd}>Click Me</Button>

            {
                filteredTransactions?.map((item, key) =>
                    <div className="transactions flex align-center space-between max-width-tablet" key={key}>
                        <Date date={item.date} readOnly />
                        <div>{item.description}</div>

                        {
                            //<div>{item.reference}</div>
                            //<div>{item.cleared ? "cleared" : "pending..."}</div>
                        }

                        <div>
                            {
                                item.budget
                                    ? `${item.budget.title} (${formatPercent(item.budget.percentage)})`
                                    : "Income"
                            }
                        </div>

                        <div>{formatDollar(item.amount)}</div>
                    </div>
                )}
        </>
    )
}

export default Transactions