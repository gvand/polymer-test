import request from 'superagent';
import { API_BASE_URL } from './constants';

export const api = {
    fetch(url) {
        return dispatch({url});
    },
    fetchResult(query) {
        return dispatch({
            query: query,
            url: API_BASE_URL
        });
    }
};

export function dispatch(options) {
    return request[options.method || 'get'](requestUrl(options))
        .set('Accept', 'application/json');
}

export function requestUrl({query, url}) {
    let params = [];
    if (query) params.push(query);
    if (params.length) {
        url += url.indexOf('?') === -1 ? '?' : '&';
        url += params.join('&');
    }
    return url;
}