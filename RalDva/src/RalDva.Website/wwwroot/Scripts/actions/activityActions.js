﻿import actionNames from './actionNames.js';

const setActivities = (activities) => {
    if (!(activities instanceof Array)) {
        throw 'activities should be an array';
    }

    return {
        type: actionNames.setActivities,
        payload: {
            activities
        }
    };
};

const setSelectedActivity = (selectedActivity ) => {
    return {
        type: actionNames.setSelectedActivity,
        payload: {
            selectedActivity
        }
    };
};

const setSelectedAction = (selectedAction ) => {
    return {
        type: actionNames.setSelectedAction,
        payload: {
            selectedAction
        }
    };
};

const activityActions = {
    setActivities,
    setSelectedActivity,
    setSelectedAction
};

export default activityActions;