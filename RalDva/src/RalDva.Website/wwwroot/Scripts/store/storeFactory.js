import { createStore, combineReducers, applyMiddleware } from "redux";

// reducers 
import notification from "../reducers/notificationReducer.js";
import activity from "../reducers/activityReducer.js";

// middleware
import apiCommunicationMiddleware from "../middleware/apiCommunicationMiddleware.js";

export default () => {
    const initialState = {
        activity: {
            activities: []
        }
    };

    const reducers = {
        activity,
        notification
    };

    const combinedReducers = combineReducers(reducers);
    const middleware = applyMiddleware(apiCommunicationMiddleware);
    const store = createStore(combinedReducers, initialState, middleware);

    return store;
};