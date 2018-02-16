// react
import React from "react";
import ReactDom from "react-dom";

import { connect } from 'react-redux';

// react-bootstrap
import { Modal, Button } from "react-bootstrap";

// components
import commonActions from "../../actions/commonActions.js";

// actions
import AddNewAnime from "./AddNewAnime.jsx";

// utils
import resourceKeys from "../../utils/resourceKeys.js";
import enums from "../../utils/enums.js";

class AddActivityForm extends React.Component {
    constructor(props) {
        super(props);
    }

    localize(key) {
        return this.props.resources[key];
    }

    getHeader() {
        const resourceName = this.props.selectedActivity + resourceKeys.singleSuffix;

        return `${this.localize("createnew")} ${this.localize(resourceName)}`;
    }

    getInnerComponent() {
        switch(this.props.selectedActivity) {
            case enums.activityTypes.anime:
                return <AddNewAnime/>;

            default:
                var txt = `form for adding ${this.props.selectedActivity} has not been implemented yet`;
                return <span>{txt}</span>;
        }
    }

    render() {
        if (!this.props.resources) {
            return (<div></div>);
        }

        return (
            <Modal show={this.props.isAddActivityFormOpen}
                   onHide={this.props.onCloseFormClick}
                   bsSize="large"
                   aria-labelledby="contained-modal-title-lg"
                   dialogClassName="custom-modal">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">{this.getHeader()}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.getInnerComponent()}
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onCloseFormClick}>{this.localize("submit")}</Button>
                    <Button onClick={this.props.onCloseFormClick}>{this.localize("close")}</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedActivity: state.activity.selectedActivity,
        isAddActivityFormOpen: state.common.isAddActivityFormOpen,
        resources: state.common.resources
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onCloseFormClick: () => {
            const action = commonActions.openAddActivityForm(false);

            dispatch(action);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddActivityForm);