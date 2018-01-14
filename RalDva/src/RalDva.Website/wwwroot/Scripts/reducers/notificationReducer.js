import actionNames from '../actions/actionNames.js';
import enums from '../utils/enums.js';

const displayOptions = {
    closeButton: true
};

const showToastr = function (title, message, levelFunc) {
    if (!this[levelFunc] || !(this[levelFunc] instanceof Function)) {
        throw 'Invalid toastr call!';
    }

    if (message instanceof Object) {
        message = JSON.stringify(message);
    }
    if (title instanceof Object) {
        title = JSON.stringify(title);
    }

    console.log(title, message);
    this[levelFunc](message, title, displayOptions);
};

export default (state = {}, action) => {
    switch (action.type) {
        case actionNames.setNotificationContainer:
            var notificationContainer = action.payload.container;

            return {...state, notificationContainer};

        case actionNames.showNotification:
            showToastr.call(
                state.notificationContainer, 
                action.payload.title,
                action.payload.message,
                action.payload.level);

            return state;

        case actionNames.callApiError:
            showToastr.call(
                state.notificationContainer, 
                action.payload.errorMessage,
                action.payload.serverResponse,
                enums.logLevels.error);

            return state;

        default:
            return state;
    }
};