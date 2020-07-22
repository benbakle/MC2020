import React from 'react';
import { Fetch } from 'controls';
import { Budgets,Transactions } from 'components';

const Landing = () => {
    //const history = useHistory();
    //const jybLoader = () => history.push('/jyb-loading');

    return (
        <div className="landing">
            <Fetch uri="/api/budget">
                <Budgets />
            </Fetch>

            <Fetch uri="api/transaction">
                <Transactions />
            </Fetch>
        </div>
    )
}

export default Landing;