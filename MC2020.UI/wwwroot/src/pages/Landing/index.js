import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Loading } from 'controls';

const Landing = () => {
    const history = useHistory();
    const loader = () => history.push('/loading');
    const jybLoader = () => history.push('/jyb-loading');

    return (
        <div className="landing">
            <Loading />
        </div>
    )
}

export default Landing;