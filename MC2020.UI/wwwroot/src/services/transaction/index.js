import React, { useState, useContext, useEffect } from "react";
import { fetch } from 'services/api';
import { useNotify } from "services/notify";

const TransactionsContext = React.createContext();

const useTransactions = () => {
    const _context = useContext(TransactionsContext);
    return _context;
}

const TransactionsContextProvider = props => {
    const [transactions, setTransactions] = useState();
    const { notify } = useNotify();

    const _fetchTransactions = async () => {
        const _transactions = await fetch('api/transaction')
        setTransactions(_transactions);

        if (_transactions?.length)
            notify(`Transaction retrieved ${_transactions.length} records!`)
    }

    const addTransaction = async transaction => {
        await fetch('api/transaction', { method: 'POST' }, transaction);
        await _fetchTransactions();
        setTimeout(() => {
            notify(`Transaction "${transaction.description}" was added!`)
        }, 100)
    }

    useEffect(() => {
        _fetchTransactions();
    }, [])

    return (
        <TransactionsContext.Provider value={{ transactions, addTransaction }}>
            {props.children}
        </TransactionsContext.Provider>
    )
}

export { TransactionsContextProvider, useTransactions };