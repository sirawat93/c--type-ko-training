import config from '../../../config'; 
import dispatcher from '../dispatcher/dispatcher';
import 'isomorphic-fetch';

const fetchMiddleware = ({ url, dispatch, params = {}, query = {}  }) => {
    let endpoint = url;
    const paramsOb = Object.keys(params);
    const queryOb = Object.keys(query);
    if (paramsOb.length !== 0) {
        Object.keys(params).forEach((name) => { // REPLACE PARAMS /users/{userId}, {userId: 123} = /users/123
            endpoint = endpoint.replace(`{${name}}`, params[name]);
        });
    }
    if (queryOb.length !== 0) {
        endpoint += ('?' + queryOb.map(key => key + '=' + query[key]).join('&'));
    }

    return fetch(config.API_DOMAIN + endpoint)
        .then(res => res.text())
        .then(res => JSON.parse(res))
        .then((res) => {
            dispatcher.dispatch({ type: dispatch, payload: res });
            return res;
        }).catch((err) => {
            return 'error';
        });
};

export default fetchMiddleware;
