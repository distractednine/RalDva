import actionNames from './actionNames.js';

const callApiGet = (url, onSuccessActionCreator, errorMessage) => {
    return {
        type: actionNames.callApiGet,
        payload: {
            url,
            onSuccessActionCreator,
            errorMessage
        }
    };
};

const callApiPost = (url, onSuccessActionCreator, dataToPost, errorMessage) => {
    return {
        type: actionNames.callApiPost,
        payload: {
            url,
            onSuccessActionCreator,
            dataToPost,
            errorMessage
        }
    };
};

const callApiError = (errorMessage, serverResponse) => {
    return {
        type: actionNames.callApiError,
        payload: {
            errorMessage,
            serverResponse
        }
    };
};

const commonActions = {
    callApiGet,
    callApiPost,
    callApiError
};

export default commonActions;