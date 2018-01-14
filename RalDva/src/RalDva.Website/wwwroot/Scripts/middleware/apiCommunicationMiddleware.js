import actionNames from '../actions/actionNames.js';
import commonActions from "../actions/commonActions.js";
import dataservice from "../utils/dataservice.js";

const getOnSuccessCallback = (dispatch, actionCreator) => {
    return data => {
        const action = actionCreator(data);

        dispatch(action);
    };
};

const getOnFailureCallback = (dispatch, errorMessage) => {
    return serverResponse => {
        const serverResponseString = getServerResponseString(serverResponse);
        const action = commonActions.callApiError(errorMessage, serverResponseString);
        
        dispatch(action);
    };
};

const getServerResponseString = (serverResponse) => {
    if (typeof serverResponse === "string") {
        return serverResponse;
    }
    if (serverResponse instanceof Object) {
        return serverResponse.message || serverResponse.errorMessage || serverResponse.error;
    }
    return serverResponse;
};

const apiCommunicationMiddleware = (store) => next => action => {
    const { payload } = action;
    let onSuccess, onFailure;

    var dispatch = store.dispatch;
    var strTemp = store;

    switch (action.type) {
        case actionNames.callApiGet:
            onSuccess = getOnSuccessCallback(dispatch, payload.onSuccessActionCreator);
            onFailure = getOnFailureCallback(dispatch, payload.errorMessage);
            dataservice.get(payload.url, onSuccess, onFailure);
            return null;

        case actionNames.callApiPost:
            onSuccess = getOnSuccessCallback(dispatch, payload.onSuccessActionCreator);
            onFailure = getOnFailureCallback(dispatch, payload.errorMessage);
            dataservice.post(payload.url, payload.dataToPost, onSuccess, onFailure);
            return null;

        default:
            return next(action);
    }
};

export default apiCommunicationMiddleware;