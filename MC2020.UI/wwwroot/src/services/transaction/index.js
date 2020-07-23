
import React, { useState, useContext, useEffect } from "react";
import { fetch } from 'services/api';

const TransactionsContext = React.createContext();

const useTransactions = () => {
    const _context = useContext(TransactionsContext);
    return _context;
}


const TransactionsContextProvider = props => {
    const [transactions, setTransactions] = useState([]);
    const [income, setIncome] = useState([]);

    useEffect(() => {

        const _fetchTransactions = async () => {
            try {
                const _transactions = await fetch('api/transaction')
                setTransactions(_transactions);
            }
            catch (e) { console.error(`mc2020 error:${e}`) }
        }

        const _fetchIncome = async () => {
            try {
                const _income = await fetch(`api/transaction/income`)
                setIncome(_income)
            }
            catch (e) { console.error(`mc2020 error:${e}`) }

        }


        _fetchTransactions();
        _fetchIncome();
    }, [transactions, income])

    const totalByBudget = async budgetId => {
        try { return await fetch(`api/transaction/budget/${budgetId}/total`) }
        catch (e) { console.error(`mc2020 error:${e}`) }
    }
    return (
        <TransactionsContext.Provider value={{ transactions, income, totalByBudget }}>
            {props.children}
        </TransactionsContext.Provider>
    )
}


export { TransactionsContextProvider, useTransactions };
