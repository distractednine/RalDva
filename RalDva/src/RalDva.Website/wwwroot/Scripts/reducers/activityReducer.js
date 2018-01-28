import actionNames from '../actions/actionNames.js';
import enums from "../utils/enums.js";

export default (state = {}, action) => {

    switch (action.type) {
        case actionNames.setActivities:
            let {activities} = action.payload;

            return { ...state, activities };

        case actionNames.setSelectedActivity:
            let {selectedActivity} = action.payload;
            var selectedActn =
                state.selectedAction ? state.selectedAction : enums.routeActionNames[0];

            return { ...state, selectedActivity, selectedAction : selectedActn };

        case actionNames.setSelectedAction:
            let {selectedAction} = action.payload;

            return { ...state, selectedAction };

        default:
            return state;
    }
};