import React, { useState, useContext, useEffect } from "react";
import { fetch } from 'services/api';

const TransactionsContext = React.createContext();

const useTransactions = () => {
    const _context = useContext(TransactionsContext);
    return _context;
}

const TransactionsContextProvider = props => {
    const [transactions, setTransactions] = useState();
    const [income, setIncome] = useState();

    const _fetchTransactions = async () => {
        const _transactions = await fetch('api/transaction')
        setTransactions(_transactions);

        const _income = await fetch(`api/transaction/income`)
        setIncome(_income)
    }

    useEffect(() => {
        _fetchTransactions();
    }, [])

    return (
        <TransactionsContext.Provider value={{ transactions, income }}>
            {props.children}
        </TransactionsContext.Provider>
    )
}

export { TransactionsContextProvider, useTransactions };