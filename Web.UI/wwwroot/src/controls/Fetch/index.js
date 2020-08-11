import React, { useState, useEffect } from 'react';
import logger from 'services/logger';
import { fetch } from 'services/api';
import { Loading } from 'controls';

const Fetch = props => {
    const { uri, children } = props;
    const [data, setData] = useState();
    const [fetching, setFetching] = useState(true);

    const fetchData = async () => {
        try {
            const _response = await fetch(uri);
            handleResponse(_response);

        } catch (error) {
            setFetching(false)
            logger.error(error);
        }
    }

    const handleResponse = data => {
        setFetching(false);
        setData(data);
    }

    useEffect(() => {
        fetching && fetchData();
    })

    return (
        <>
            {
                fetching && !data &&
                <Loading />
            }
            {
                !fetching && data &&
                React.cloneElement(children, { data: data })
            }
        </>
    )
}

export default Fetch;