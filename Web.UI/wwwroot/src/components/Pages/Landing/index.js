import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../Controls';

const Landing = () => {
    const history = useHistory();
    const loader = () => history.push('/loading');
    const jybLoader = () => history.push('/jyb-loading');

    return (
        <div className="landing">
            <Button
                content="View Loader"
                className="primary"
                onClick={loader} />

            <Button
                content="View JYB Loader"
                className="primary"
                onClick={jybLoader} />
        </div>
    )
}

export default Landing;