export const FAILED_RESULT = 'FAILED_RESULT';
export const failedResult = error => ({
    type: FAILED_RESULT,
    payload: error
});

export const SUCCESS_RESULT = 'SUCCESS_RESULT';
export const successResult = (id, result) => ({
    type: SUCCESS_RESULT,
    payload: {
        id: id,
        result: result
    }
});

export const PENDING_RESULT = 'PENDING_RESULT';
export const pendingResult = id => ({
    type: PENDING_RESULT,
    payload: {
        id: id
    }
});

export const LOAD_RESULT = 'LOAD_RESULT';
export const loadResult = query => ({
    type: LOAD_RESULT,
    payload: {
        query: query,
        id: query
    }
});

export const PLUS = 'PLUS';
export const plus = () => ({
    type: PLUS
});

export const MINUS = 'MINUS';
export const minus = () => ({
    type: MINUS
});