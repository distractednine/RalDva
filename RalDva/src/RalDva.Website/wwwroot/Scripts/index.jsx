// react
import React from "react";
import ReactDom from "react-dom";

// redux
import { Provider } from "react-redux";

// react-router
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


import storeFactory from "./store/storeFactory.js";

// components
import MainNavbar from "./components/MainNavbar.jsx";
import MainActionMenu from "./components/MainActionMenu.jsx";
import NotificationsHolder from "./components/NotificationsHolder.jsx";
import FourOuFour from "./components/FourOuFour.jsx";
import LoadingRedirect from "./components/LoadingRedirect.jsx";
import AddActivityForm from "./components/AddActivityForm.jsx";
import TestComponent from "./test/TestComponent.jsx";

(function () {
    const App = () => {
        return (
            <div>
                <MainNavbar/>
                <MainActionMenu/>
                <NotificationsHolder/>
                <AddActivityForm/>
            </div>
        );
    };

    // temp
    const HiComponent = () => {
        return (
            <div className="text-center">
                <h2>Hi</h2>
                <h2>from</h2>
                <h3>Ral Dva</h3>
            </div>
        );
    };

    const renderApp = store => {
        ReactDom.render(
            <Provider store={store}>
                <Router>
                    <div>
                        <App/>
                        <Switch>
                            <Route exact path="/" component={LoadingRedirect} />
                            <Route path="/:activity/story" component={HiComponent} />
                            <Route path="/:activity/plans" component={FourOuFour}/>
                            <Route path="/:activity/activity" component={TestComponent}/>
                            <Route path="/:activity/analitics" component={TestComponent}/>
                            <Route component={FourOuFour}/>
                        </Switch>                        
                    </div>
                </Router>
            </Provider>,
            document.getElementById("react-container")
        );
    };

    const store = storeFactory();

    renderApp(store);
}());