import React, { useState, useEffect } from 'react';
import { Input, Date } from 'controls/Fields';
import { Button } from 'controls';
import { useTransactions, TransactionsContextProvider } from 'services/transaction';
import { useNotify } from 'services/notify';
import { Checkmark } from 'icons';
import { BudgetSelector } from 'components/Budgets';


const TransactionForm = props => {
    const { addTransaction } = useTransactions();
    const { notify } = useNotify();
    const [date, setDate] = useState()
    const [description, setDescription] = useState("");
    const [budgetId, setBudgetId] = useState("all")
    const [amount, setAmount] = useState(0)
    const [cleared, setCleared] = useState(0)
    const [reference, setReference] = useState("")

    const handleAdd = async () => {
        let _budget = null

        if (budgetId === "all")
            return;

        if (budgetId * 1 !== -1)
            _budget = { id: budgetId }

        const _transaction = {
            amount: amount * 1,
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

    return (
        <div className="transaction-form">

            <Date onChange={e => { setDate(e.target.value) }} date={date} />
            <Input onChange={e => { setDescription(e.target.value) }} value={description} placeholder="Description" />
            <BudgetSelector onChange={e => { setBudgetId(e.target.value) }} value={budgetId} />
            <Input onChange={e => { setReference(e.target.value) }} value={reference} placeholder="Reference #" />
            <Input onChange={e => { setAmount(e.target.value) }} value={amount} placeholder="Amount" />
            {/*cleared*/ }
            <Button className="button" onClick={handleAdd}><Checkmark /></Button>
        </div>
    )
}
export default TransactionForm