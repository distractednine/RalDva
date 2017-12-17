const validateCallbacks = (onSuccess, onError) => {
    if (onSuccess && !(onSuccess instanceof Function)) {
        throw "invalid onSuccess callback";
    }
    if (onError && !(onError instanceof Function)) {
        throw "invalid onError callback";
    }
};

const processResult = (result, callback) => {
    var parsedObj = JSON.parse(result.response);

    callback(parsedObj);
};

const dataservice = {
    get: (url, onSuccess, onError) => {
        validateCallbacks(onSuccess, onError);

        const request = new XMLHttpRequest();
        request.open('GET', url);
        request.onload = () => processResult(request, onSuccess);
        request.onerror = () => processResult(request, onError);
        request.send();
    },
    post: (url, data, onSuccess, onError) => {
        validateCallbacks(onSuccess, onError);

        const request = new XMLHttpRequest();
        request.open('POST', url);
        request.onload = () => processResult(request, onSuccess);
        request.onerror = () => processResult(request, onError);
        request.send(data);
    }
};

export default dataservice;