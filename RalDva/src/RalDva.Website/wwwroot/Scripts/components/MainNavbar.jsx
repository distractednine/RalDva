import React from "react";
import ReactDom from "react-dom";
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap";

const MainNavbar = React.createClass({
    handleSelect(selectedKey) {
        alert(`selected ${selectedKey}`);
    },
    render() {
        const mainCategories = this.props.activityCategories.map((category) =>
            <NavItem eventKey={category.name} href="/home">{category.name}</NavItem>
        );

        return (
            <Navbar inverse collapseOnSelect fluid>
                <Navbar.Header className="nav-logo-img">
                    <Navbar.Brand>
                        <a href="#">
                            <img src="/Content/logo2.png" />
                        </a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav bsStyle="tabs" justified activeKey={1} onSelect={this.handleSelect}>{mainCategories}</Nav>
                    <Nav>
                        <NavItem eventKey={1} href="#">Link</NavItem>
                        <NavItem eventKey={2} href="#">Link</NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider/>
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Link Right</NavItem>
                        <NavItem eventKey={2} href="#">Link Right</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
});

export default MainNavbar;