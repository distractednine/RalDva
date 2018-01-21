import actionNames from '../actions/actionNames.js';

export default (state = {}, action) => {
    switch (action.type) {
        case actionNames.setResources:
            var resources = action.payload.resources;

            return {...state, resources};

        default:
            return state;
    }
};