import React from 'react';
import { Fetch } from 'controls';
import { BudgetList } from 'components';


const Landing = () => {
    //const history = useHistory();
    //const jybLoader = () => history.push('/jyb-loading');

    return (
        <div className="landing">
            <Fetch uri="/api/budget">
                <BudgetList />
            </Fetch>

        </div>
    )
}

export default Landing;