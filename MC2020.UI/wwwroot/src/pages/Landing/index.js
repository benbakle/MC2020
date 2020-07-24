import React from 'react';
import { Budgets, Transactions } from 'components';
import { TransactionsContextProvider } from 'services/transaction';
import { BudgetContextProvider } from 'services/budget';

const Landing = () => {
    //const history = useHistory();
    //const jybLoader = () => history.push('/jyb-loading');

    return (
        <div className="landing">
            <TransactionsContextProvider>
                <BudgetContextProvider>
                    <Budgets />
                    <Transactions />
                </BudgetContextProvider>
            </TransactionsContextProvider>

        </div>
    )
}

export default Landing;