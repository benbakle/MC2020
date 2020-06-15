import React from 'react';
import { useHistory } from 'react-router-dom';
import { Controls } from '../..';

const { Button } = Controls;

const Landing = () => {
    const history = useHistory();
    return (
        <Button
            content="View Loader"
            className="button primary"
            onClick={() => history.push('/loading')} />
    )
}

export default Landing;