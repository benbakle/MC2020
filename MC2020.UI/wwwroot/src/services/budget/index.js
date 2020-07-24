
import React, { useState, useContext, useEffect } from "react";
import { fetch } from 'services/api';

const BudgetContext = React.createContext();

const useBudget = () => {
    const _context = useContext(BudgetContext);
    return _context;
}

const BudgetContextProvider = props => {
    const [budget, setBudget] = useState();
    const [fetching, setFetching] = useState();

    const _fetchBudget = async () => {
        const _budget = await fetch('api/transaction')
        setBudget(_budget);
    }

    useEffect(() => {
        _fetchBudget();
    }, [fetching])

    return (
        <BudgetContext.Provider value={{ budget }}>
            {props.children}
        </BudgetContext.Provider>
    )
}

export { BudgetContextProvider, useBudget };
