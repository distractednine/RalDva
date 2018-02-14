// react
import React from "react";
import ReactDom from "react-dom";

import { connect } from 'react-redux';

// actions
import commonActions from "../actions/commonActions.js";

// react-bootstrap
import { Modal, Button } from "react-bootstrap";

class AddActivityForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Modal show={this.props.isAddActivityFormOpen}
                   onHide={this.handleHide}
                   dialogClassName="custom-modal">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Wrapped Text</h4>
                    <p>Ipsu et nemo expedita. Consequuntur perspiciatis cumque dolorem.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onCloseFormClick}>{this.props.resources["close"]}</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

const mapStateToProps = (state) => {
    return {
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