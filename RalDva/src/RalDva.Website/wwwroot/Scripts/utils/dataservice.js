import Promise from 'es6-promise';

const validateCallbacks = (onSuccess, onError) => {
    if (onSuccess && !(onSuccess instanceof Function)) {
        throw "invalid onSuccess callback";
    }
    if (onError && !(onError instanceof Function)) {
        throw "invalid onError callback";
    }
};

const processResult = (result, callback) => {
    let responseData;

    try {
        responseData = JSON.parse(result.response);
    } catch(e) {
        responseData = result.response;
    }

    callback(responseData);
};

const makeRequest = (method, url, data) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 400) {
                resolve(xhr);
            } else {
                reject(xhr);
            }
        };
        xhr.onerror = () => reject(xhr);

        xhr.send(data);
    });
}

const dataservice = {
    get: (url, onSuccess, onError) => {
        validateCallbacks(onSuccess, onError);

        makeRequest('GET', url)
            .then(response => processResult(response, onSuccess))
            .catch(response => processResult(response, onError));
    },
    post: (url, data, onSuccess, onError) => {
        validateCallbacks(onSuccess, onError);

        makeRequest('POST', url)
            .then(response => processResult(response, onSuccess))
            .catch(response => processResult(response, onError));
    }
};

export default dataservice;