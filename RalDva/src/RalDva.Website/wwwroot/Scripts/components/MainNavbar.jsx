import React from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";

import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap";

class MainNavbar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCategory: "",
            activityCategories: props.activityCategories
        };
    }

    onActivitySelected(selectedCategory) {
        this.setState({
            selectedCategory: selectedCategory
        });
    }

    onAddActivityClick() {
        alert('onAddActivityClick');
        return;
    }

    onActionClickDefault(eventKey) {
        if (eventKey === 'Story') {
            
        }
        if (eventKey === 'Plans') {
            
        }

        alert(eventKey);
    }

    render() {
        const mainCategories = this.state.activityCategories.map(
            cat => <NavItem eventKey={cat.name} key={cat.name} href="/home">{cat.name}</NavItem>
        );

        return (
            <div>
                <Navbar inverse collapseOnSelect fluid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Ral-Dva</a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav bsStyle="tabs" justified activeKey={this.state.selectedCategory} onSelect={cat => this.onActivitySelected(cat)}>{mainCategories}</Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Nav bsStyle="tabs" justified onSelect={this.onActionClickDefault}>
                    <NavItem eventKey="Add" href="#">Add</NavItem>
                    <NavItem eventKey="Story" href="#">Story</NavItem>
                    <NavItem eventKey="Plans" href="#">Plans</NavItem>
                    <NavItem eventKey="Activity" href="#">Activity</NavItem>
                    <NavItem eventKey="Analitics" href="#">Analitics</NavItem>
                    <NavDropdown title="User" id="nav-dropdown" pullRight>
                        <MenuItem eventKey="Options">Options</MenuItem>
                        <MenuItem divider/>
                        <MenuItem eventKey="LogOut">Log out</MenuItem>
                    </NavDropdown>
                </Nav>
            </div>
        );
    }
};

MainNavbar.propTypes = {
    activityCategories: PropTypes.array
};

MainNavbar.defaultProps = {
    selectedCategory: ""
};

export default MainNavbar;