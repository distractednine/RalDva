import { createStore, combineReducers, applyMiddleware, compose  } from "redux";

// reducers 
import notification from "../reducers/notificationReducer.js";
import activity from "../reducers/activityReducer.js";
import common from "../reducers/commonReducer.js";

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
        notification,
        common
    };

    const combinedReducers = combineReducers(reducers);

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const middleware = applyMiddleware(apiCommunicationMiddleware);

    const composedMiddleware = composeEnhancers(middleware);

    const store = createStore(combinedReducers, initialState, composedMiddleware);

    return store;
};