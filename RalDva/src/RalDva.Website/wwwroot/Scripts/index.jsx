// react
import React from "react";
import ReactDom from "react-dom";

// redux
import { Provider } from "react-redux";

import storeFactory from "./store/storeFactory.js";

// components
import MainNavbar from "./components/MainNavbar.jsx";
import NotificationsHolder from "./components/NotificationsHolder.jsx";
import TestComponent from "./components/TestComponent.jsx";

(function () {
    const App = () => {
        return (
            <div>
                <MainNavbar/>
                <NotificationsHolder/>
                <TestComponent/>
            </div>
        );
    };

    const renderApp = store => {
        ReactDom.render(
            <Provider store={store}>
                <App />
            </Provider>,
            document.getElementById("react-container")
        );
    };

    const store = storeFactory();

    renderApp(store);
}());