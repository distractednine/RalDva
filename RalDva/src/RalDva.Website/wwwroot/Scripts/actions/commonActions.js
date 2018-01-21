import actionNames from './actionNames.js';

const setResources = (resources) => {
    return {
        type: actionNames.setResources,
        payload: {
            resources
        }
    };
};


const commonActions = {
    setResources
};

export default commonActions;