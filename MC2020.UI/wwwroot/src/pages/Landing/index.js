import React from 'react';
import { Fetch } from 'controls';
import { Budgets, Transactions } from 'components';
import { TransactionsContextProvider } from 'services/transaction';

const Landing = () => {
    //const history = useHistory();
    //const jybLoader = () => history.push('/jyb-loading');

    return (
        <div className="landing">

                <Fetch uri="/api/budget">
                    <Budgets />
                </Fetch>

            <TransactionsContextProvider>
                <Transactions />
            </TransactionsContextProvider>
                
        </div>
    )
}

export default Landing;