// react
import React from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";

import { connect } from 'react-redux';

// react-bootstrap
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// actions
import activityActions from "../actions/activityActions.js";
import commonActions from "../actions/commonActions.js";
import apiCommunicationActions from "../actions/apiCommunicationActions.js";

// utils
import endpoints from "../utils/endpoints.js";
import enums from "../utils/enums.js";

class MainNavbar extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestActivitiesFroApi();
    }

    getLink(actionName) {
        return `/${actionName}/${this.props.selectedAction}`;
    }

    render() {
        const mainCategories = this.props.activities.map(
            act =>
                <li key={act.name} role="presentation" className={this.props.selectedActivity === act.name ? 'active' : '' }>
                    <Link to={this.getLink(act.name)} onClick={() => this.props.onActivitySelected(act.name)}>
                        {act.caption}
                    </Link>
                </li>
        );

        return (           
            <Navbar inverse collapseOnSelect fluid>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">Ral-Dva</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <ul className="nav nav-pills navbar-nav">{mainCategories}</ul>
                    <Nav pullRight>
                        <NavDropdown title="User" id="nav-dropdown" pullRight>
                            <MenuItem eventKey="Options">Options</MenuItem>
                            <MenuItem divider/>
                            <MenuItem eventKey="LogOut">Log out</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>                            
        );
    }
}

MainNavbar.propTypes = {
    activities: PropTypes.array,
    selectedActivity: PropTypes.string
};

MainNavbar.defaultProps = {
    activities: [],
    selectedActivity: ''
};

const mapStateToProps = (state) => {
    return {
        activities: state.activity.activities,
        selectedActivity: state.activity.selectedActivity,
        selectedAction: state.activity.selectedAction,
        resources: state.common.resources
    };
};

const mapDispatchToProps = dispatch => {
    return {
        requestActivitiesFroApi: () => {
            const successActionCreator = (responseData) => {
                return [
                    activityActions.setActivities(responseData.activityCategories),
                    commonActions.setResources(responseData.resourceStrings),
                    activityActions.setSelectedActivity(responseData.activityCategories[0].name)
                ];
            };

            const action = apiCommunicationActions.callApiGet(endpoints.getMainPageModel,
                successActionCreator,
                enums.failedToPerformInitialDataLoading);

            dispatch(action);
        },
        onActivitySelected: (selectedActivity) => {
            const action = activityActions.setSelectedActivity(selectedActivity);

            dispatch(action);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainNavbar);