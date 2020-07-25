import React, { useState, useContext, useEffect } from "react";
import { fetch } from 'services/api';

const TransactionsContext = React.createContext();

const useTransactions = () => {
    const _context = useContext(TransactionsContext);
    return _context;
}

const TransactionsContextProvider = props => {
    const [transactions, setTransactions] = useState();

    const _fetchTransactions = async () => {
        const _transactions = await fetch('api/transaction')
        setTransactions(_transactions);
    }

    const addTransaction = async transaction => {
        await fetch('api/transaction', { method: 'POST' }, transaction);
        await _fetchTransactions();
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