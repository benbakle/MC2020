
const log = (message, type) => {
    if (message)
        console.log(type ? `${type} : ${message}` : message);
}

const info = (message) => {
    log(message, "INFO");
}

const error = (message) => {
    log(message, "ERROR");
}

export default { log, info, error }