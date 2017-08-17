module.exports = {
    isNumber: (o) => {
        return ! isNaN (o-0) && o !== null && o !== "" && o !== false;
    },
    getError: (code, message) => {
        let error = new Error(message);
        error.name = code.toString();
        error.status = code;
        return error;
    }
};