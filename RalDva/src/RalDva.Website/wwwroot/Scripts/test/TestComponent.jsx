import React from "react";
import { connect } from "react-redux";

import apiCommunicationActions from "../actions/apiCommunicationActions.js";
import notificationActions from "../actions/notificationActions.js";

import enums from '../utils/enums.js';

class TestComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.testInfoMessages();
        this.props.testErrorOnGet();
        this.props.testErrorOnPost();
    }

    render() {
        return(
            <div>test component has been rendered</div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        testInfoMessages: () => {
            const action1 = notificationActions.showNotification(enums.logLevels.success, "test title", "success test message");
            const action2 = notificationActions.showNotification(enums.logLevels.warning, "test title", "warning test message");
            const action3 = notificationActions.showNotification(enums.logLevels.info, "test title", "info test message");

            dispatch(action1);
            dispatch(action2);
            dispatch(action3);
        },
        testErrorOnGet: () => {
            const successActionCreator = () => {};
            const action = apiCommunicationActions.callApiGet('/api/test/GetBadRequest', successActionCreator, 'error on get');

            dispatch(action);
        },
        testErrorOnPost: () => {
            const successActionCreator = () => {};
            const action = apiCommunicationActions.callApiPost('/api/test/GetInternalServerError', {}, successActionCreator, 'error on post');

            dispatch(action);
        }
    };
};

export default connect(null, mapDispatchToProps)(TestComponent);