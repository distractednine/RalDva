import React from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";

import { connect } from 'react-redux';

import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap";

// actions
import activityActions from "../actions/activityActions.js";
import commonActions from "../actions/commonActions.js";

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

    onActionClickDefault(eventKey) {
        if (eventKey === "Story") {

        }
        if (eventKey === "Plans") {

        }

        alert(eventKey);
    }

    render() {
        const mainCategories = this.props.activities.map(
            act => <NavItem eventKey={act.name} key={act.name} href="/home">{act.name}</NavItem>
        );

        return (
            <div >
                <Navbar inverse collapseOnSelect fluid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Ral-Dva</a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav bsStyle="pills" activeKey={this.props.selectedActivity} onSelect={cat => this.props.onActivitySelected(cat)}>{mainCategories}</Nav>
                        <Nav pullRight>
                            <NavDropdown title="User" id="nav-dropdown" pullRight>
                                <MenuItem eventKey="Options">Options</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey="LogOut">Log out</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>

                <Nav bsStyle="pills" justified onSelect={this.onActionClickDefault}>
                    <NavItem eventKey="Add" href="#">Add</NavItem>
                    <NavItem eventKey="Story" href="#">Story</NavItem>
                    <NavItem eventKey="Plans" href="#">Plans</NavItem>
                    <NavItem eventKey="Activity" href="#">Activity</NavItem>
                    <NavItem eventKey="Analitics" href="#">Analitics</NavItem>
                </Nav>
            </div>
        );
    }
};

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
        selectedActivity: state.activity.selectedActivity
    };
};

const mapDispatchToProps = dispatch => {
    return {
        requestActivitiesFroApi: () => {
            const successActionCreator = (responseData) => {
                return activityActions.setActivities(responseData.activityCategories);
            };

            const action = commonActions.callApiGet(endpoints.getMainPageModel,
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