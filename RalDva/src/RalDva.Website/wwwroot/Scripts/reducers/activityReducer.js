import actionNames from '../actions/actionNames.js';

export default (state = {}, action) => {
    switch (action.type) {
        case actionNames.setActivities:
            let {activities} = action.payload;

            return { ...state, activities };

        case actionNames.setSelectedActivity:
            let {selectedActivity} = action.payload;

            return { ...state, selectedActivity };

        default:
            return state;
    }
};