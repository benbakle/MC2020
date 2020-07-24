import React, { useState, useContext, useEffect } from "react";
import { fetch } from 'services/api';

const BudgetContext = React.createContext();

const useBudget = () => {
    const _context = useContext(BudgetContext);
    return _context;
}


const BudgetContextProvider = props => {
    const [budget, setBudget] = useState([]);

    useEffect(() => {
        const _fetchBudget = async () => {
            try {
                const _budget = await fetch('api/budget')
                setBudget(_budget);
                console.table(_budget)
            }
            catch (e) { console.error(`mc2020 error:${e}`) }
        }

        _fetchBudget();
        
    })

    return (
        <BudgetContext.Provider value={{ budget }}>
            {props.children}
        </BudgetContext.Provider>
    )
}

export { BudgetContextProvider, useBudget };
