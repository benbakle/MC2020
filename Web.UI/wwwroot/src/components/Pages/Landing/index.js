import React from 'react';
import { useHistory } from 'react-router-dom';
import { Controls } from '../..';

const Landing = () => {
    const history = useHistory();
    const { Button } = Controls;
    const goTo = () => history.push('/loading');

    return (
        <div className="landing">

            <Button
                content="View Loader"
                className="primary"
                onClick={goTo} />
        </div>
    )
}

export default Landing;