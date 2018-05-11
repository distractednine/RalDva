import actionNames from "../actions/actionNames.js";

export default (state = {}, action) => {
    switch (action.type) {
        case actionNames.setResources:
            var resources = {};

            for (var key in action.payload.resources) {
                if (action.payload.resources.hasOwnProperty(key)) {
                    // lower resource key names
                    resources[key.toLowerCase()] = action.payload.resources[key];
                }
            }

            return {...state, resources};

        case actionNames.openAddActivityForm:
            var {isAddActivityFormOpen} = action.payload;

            return {...state, isAddActivityFormOpen};

        default:
            return state;
    }
};