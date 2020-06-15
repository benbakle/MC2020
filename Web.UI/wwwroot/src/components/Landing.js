import React from 'react';
import { useHistory } from 'react-router-dom';

const Landing = () => {
    const history = useHistory();
    return <button onClick={() => history.push('/loading')}>View Loader</button>;
}

export default Landing;