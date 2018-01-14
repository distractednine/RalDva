import actionNames from './actionNames.js';

// -------------------------- Notifications -------------------------- 

const setNotificationContainer = (container) => {
    const action = {
        type: actionNames.setNotificationContainer,
        payload: {
            container
        }
    };

    return action;
};

const showNotification = (level, title, message) => {
    const action = {
        type: actionNames.showNotification,
        payload: {
            level,
            title,
            message
        }
    };

    return action;
};

const notificationActions = {
    setNotificationContainer,
    showNotification
};

export default notificationActions;