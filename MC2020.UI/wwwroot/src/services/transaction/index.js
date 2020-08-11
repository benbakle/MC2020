import React, { useState, useContext, useEffect } from "react";
import { fetch } from 'services/api';

const TransactionsContext = React.createContext();

const useTransactions = () => {
    const _context = useContext(TransactionsContext);
    return _context;
}

const sumOfProperty = (arr, prop) => {
    let _sum = 0;

    for (let i = 0; i < arr?.length; i++)
        _sum = _sum + arr[i][prop];

    return _sum;
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

    const budgetTotalById = id => sumOfProperty(transactions?.filter(t => t.budget?.id === id), "amount");


    useEffect(() => {
        _fetchTransactions();
    }, [])

    return (
        <TransactionsContext.Provider value={{ transactions, addTransaction, budgetTotalById }}>
            {props.children}
        </TransactionsContext.Provider>
    )
}

export { TransactionsContextProvider, useTransactions };