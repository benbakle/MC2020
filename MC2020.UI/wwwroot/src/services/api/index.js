import logger from 'services/logger';
//import { accessToken } from 'services/store';

const _headers = () => {
    return {
        'Authorization': 'Bearer ', //+ accessToken(),
        'Content-Type': 'application/json'
    };
}

const _requestOptions = (options, payload) => {
    if (payload)
        options.body = JSON.stringify(payload);

    return {
        method: "GET",
        headers: { ..._headers() },
        ...options
    };
}

const _fetch = async (uri, options, payload) => {
    if (!uri)
        throw new Error("No uri was provided");

    const data = async () => {
        const _response = await fetch(uri, _requestOptions(options, payload))
        return handledResponse(_response);
    }

    try { return await data() }
    catch (error) { handleError(error) }
}

const handledResponse = res => {
    const { status, statusText } = res;

    if (okNoContent())
        return Promise.resolve();

    if (ok())
        return res.json();

    throwError();

    function ok() {
        return status >= 200 && status < 300;
    }

    function okNoContent() {
        return status === 204;
    }

    function throwError() {
        let _statusText = `${status} : ${statusText}`;
        let err = new Error(_statusText);
        logger.error(_statusText);

        throw err;
    }
}

function handleError(e) {
    throw e;
}

export {
    _fetch as fetch,
    _headers as headers,
};