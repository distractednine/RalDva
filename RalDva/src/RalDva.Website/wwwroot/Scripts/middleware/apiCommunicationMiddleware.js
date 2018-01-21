import actionNames from '../actions/actionNames.js';
import apiCommunicationActions from "../actions/apiCommunicationActions.js";
import dataservice from "../utils/dataservice.js";

const getOnSuccessCallback = (dispatch, actionCreator) => {
    return data => {
        const action = actionCreator(data);

        if (Array.isArray(action)) {
            action.forEach(actn => dispatch(actn));
        } else {
            dispatch(action);
        }
    };
};

const getOnFailureCallback = (dispatch, errorMessage) => {
    return serverResponse => {
        const serverResponseString = getServerResponseString(serverResponse);
        const action = apiCommunicationActions.callApiError(errorMessage, serverResponseString);
        
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

const apiCommunicationMiddleware = ({dispatch}) => next => action => {
    const { payload } = action;
    let onSuccess, onFailure;

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