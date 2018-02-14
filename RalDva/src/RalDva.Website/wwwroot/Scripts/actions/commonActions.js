import actionNames from './actionNames.js';

const setResources = (resources) => {
    return {
        type: actionNames.setResources,
        payload: {
            resources
        }
    };
};

const openAddActivityForm = (isAddActivityFormOpen) => {
    return {
        type: actionNames.openAddActivityForm,
        payload: {
            isAddActivityFormOpen
        }
    };
};

const commonActions = {
    setResources,
    openAddActivityForm
};

export default commonActions;