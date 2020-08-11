
import React, { useState, useContext, useEffect } from "react";
import { fetch } from 'services/api';

const BudgetContext = React.createContext();

const useBudget = () => {
    const _context = useContext(BudgetContext);
    return _context;
}

const BudgetContextProvider = props => {

    const [income, setIncome] = useState(0);
    const [budgets, setBudgets] = useState([]);

    const _fetchBudgets = async () => {
        const _budgets = await fetch('api/budget')
        setBudgets(_budgets);
    }

    const _fetchIncome = async () => {
        const _income = await fetch('api/transaction/income/total');
        setIncome(_income);
    }

    useEffect(() => {
        _fetchBudgets();
        _fetchIncome();
    }, [])

    return (
        <BudgetContext.Provider value={{ budgets, income }}>
            {props.children}
        </BudgetContext.Provider>
    )
}

export { BudgetContextProvider, useBudget };
