import React, { useState, useEffect } from 'react';
import { formatDollar, formatPercent } from 'libraries/numbers';
import { Input } from 'controls/Fields';
import { Date, Button } from 'controls';
import { useTransactions } from 'services/transaction';
import { useBudget } from 'services/budget';
import { useNotify } from 'services/notify';
import { Checkmark } from 'icons';
import './__.scss';
import { BudgetSelector } from 'components/Budgets';


const TransactionForm = props => {
    const { addTransaction } = useTransactions();
    const { notify } = useNotify();
    const [date, setDate] = useState()
    const [description, setDescription] = useState("");
    const [budgetId, setBudgetId] = useState("all")
    const [amount, setAmount] = useState()
    const [cleared, setCleared] = useState(0)
    const [reference, setReference] = useState()

    const handleAdd = async () => {
        let _budget = null

        if (budgetId === "all")
            return;

        if (budgetId * 1 !== -1)
            _budget = { id: budgetId }

        const _transaction = {
            amount,
            budget: _budget,
            cleared,
            date,
            description,
            reference
        }

        console.table(_transaction)

        await addTransaction(_transaction);
        notify(`${description} was added!`)
    }
    //amount: 300,
    //budget: {
    //id: "799ab880-1dba-44e5-8fa0-517d31a8bf03",
    //percentage: 0.25,
    //title: "Housing"
    //},
    //cleared: false,
    //date: "2020-07-21T00:00:00",
    //description: "Quicken Loans",
    //reference: "SUMONLINE#",

    return (
        <div className="transaction-form">

            <Date onChange={e => { setDate(e.target.value) }} date={date} />
            <Input onChange={e => { setDescription(e.target.value) }} value={description} placeholder="Description" />
            <BudgetSelector onChange={e => { setBudgetId(e.target.value) }} value={budgetId} />
            <Input onChange={e => { setReference(e.target.value) }} value={reference} placeholder="Reference #" />
            <Input onChange={e => { setAmount(e.target.value) }} value={amount} placeholder="Amount" />
           
            <Button className="button" onClick={handleAdd}><Checkmark /></Button>
        </div>
    )
}

const Transactions = props => {
    const { transactions } = useTransactions();
    const { budget } = useBudget();

    const [filteredTransactions, setFilteredTransactions] = useState();
    const [typeId, setTypeId] = useState();

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

    const handleSelectBudget = e => { setTypeId(e.target.value) }

    return (
        <>
            <BudgetSelector onChange={handleSelectBudget} name="budget" value={typeId} />

            {
                <TransactionForm />
            }

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