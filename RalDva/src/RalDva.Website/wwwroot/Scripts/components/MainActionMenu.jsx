// react
import React from "react";
import ReactDom from "react-dom";
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

// actions
import activityActions from "../actions/activityActions.js";
import commonActions from "../actions/commonActions.js";

// utils
import enums from "../utils/enums.js";

class MainActionMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    getLink(actionName) {
        return this.props.selectedActivity? 
            `/${this.props.selectedActivity}/${actionName}` : 
            `/${actionName}`;
    }

    getEmptyActions() {
        return (
            <ul className="nav nav-pills nav-justified">
                <li role="presentation">
                    <Link to="#"/>
                </li>
            </ul>
        );
    }

    renderAction(actionName) {
        return (
            <li role="presentation" key={actionName} className={this.props.selectedAction === actionName ? 'active' : '' }>
                <Link to={this.getLink(actionName)} onClick={() => this.props.onActionSelected(actionName)}>
                    {this.props.resources[actionName]}
                </Link>
            </li>
            );
    }

    render() {
        return this.props.resources ?
            (
                <ul className="nav nav-pills nav-justified">
                   <li role="presentation">
                        <a href="#" role="button" onClick={this.props.onAddActivityClick}>{this.props.resources['add']}</a>
                   </li>
                       {
                           enums.routeActionNames.map(
                                name => this.renderAction(name)
                           )
                       }
                </ul>
            ) :
            this.getEmptyActions();
    }
}

const mapStateToProps = (state) => {
    return {
        selectedActivity: state.activity.selectedActivity,
        selectedAction: state.activity.selectedAction,
        resources: state.common.resources
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onActionSelected: (selectedAction) => {
            const action = activityActions.setSelectedAction(selectedAction);

            dispatch(action);
        },
        onAddActivityClick: () => {
            const action = commonActions.openAddActivityForm(true);

            dispatch(action);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainActionMenu);