import React from 'react';
import { Fetch } from 'controls';
import { Budgets, Transactions } from 'components';
import { TransactionsContextProvider } from 'services/transaction';

const Landing = () => {
    //const history = useHistory();
    //const jybLoader = () => history.push('/jyb-loading');

    return (
        <div className="landing">
            <TransactionsContextProvider>

                <Fetch uri="/api/budget">
                    <Budgets />
                </Fetch>

                <Transactions />
                
            </TransactionsContextProvider>
        </div>
    )
}

export default Landing;