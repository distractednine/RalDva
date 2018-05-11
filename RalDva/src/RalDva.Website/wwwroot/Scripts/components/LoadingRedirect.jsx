// react
import React from "react";
import ReactDom from "react-dom";
import { connect } from "react-redux";

// router
import { Redirect } from "react-router-dom";

import { BounceLoader } from "react-spinners";

// react-bootstrap
import { Grid, Row, Col, NavDropdown, MenuItem } from "react-bootstrap";

import enums from "../utils/enums.js";


class LoadingRedirect extends React.Component {
    constructor(props) {
        super(props);
    }

    renderIsLoading () {
        return (
            <Grid>
                <Row className="show-grid">
                    <Col md={4} mdOffset={5} sm={4} smOffset={5} lg={4} lgOffset={5}>
                        <BounceLoader color={"#aabbcc"} loading={true} size={199} />
                    </Col>
                </Row>
            </Grid>
            );
    }

    getRedirectUrl () {
        return `/${this.props.activities[0].name}/${enums.routeActionNames[0]}`;
    }
    

    render () {
        return (
            (this.props.activities && this.props.activities.length) ? 
                <Redirect to={this.getRedirectUrl()}/> : 
                this.renderIsLoading() 
            );
    }
}

const mapStateToProps = (state) => {
    return {
        activities: state.activity.activities
    };
};

export default connect(mapStateToProps)(LoadingRedirect);