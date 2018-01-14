import React from "react";
import { connect } from 'react-redux';
import { ToastContainer } from "react-toastr";

import notificationActions from "../actions/notificationActions.js";

class NotificationsHolder extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <ToastContainer ref={ref => this.props.setNotificationContainer(ref)} className="toast-top-right"/>
            );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setNotificationContainer: (container) => {
            const action = notificationActions.setNotificationContainer(container);

            dispatch(action);
        }
    };
};

export default connect(null, mapDispatchToProps)(NotificationsHolder);