// react
import React from "react";
import ReactDom from "react-dom";

// react-bootstrap
//import { Grid, Row, Col, NavDropdown, MenuItem } from "react-bootstrap";
import { Row, Col, Form, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from "react-bootstrap";


class AddNewAnime extends React.Component {
    constructor(props) {
        super(props);

        this.placeholder = "";
    }

    renderGeneralSection() {
        return (
                <Row>
                    <Col xs={4} md={4}>
                        <FormGroup controlId="formBasicText"
                                   validationState={null}>
                            <ControlLabel>Name - text</ControlLabel>
                            <FormControl type="text"
                                         value={this.placeholder}
                                         placeholder="Enter text"
                                         onChange={() => {}}/>
                            <FormControl.Feedback/>
                            <HelpBlock></HelpBlock>
                        </FormGroup>
                    </Col>
                    <Col xs={4} md={4}>
                        <FormGroup controlId="formBasicText"
                                   validationState={null}>
                            <ControlLabel>Year - datetimepicker</ControlLabel>
                            <FormControl type="text"
                                         value={this.placeholder}
                                         placeholder="Enter text"
                                         onChange={() => {}}/>
                            <FormControl.Feedback/>
                            <HelpBlock></HelpBlock>
                        </FormGroup>
                    </Col>
                    <Col xs={4} md={4}>
                        <FormGroup controlId="formBasicText"
                                   validationState={null}>
                            <ControlLabel>Genres - select 2</ControlLabel>
                            <FormControl type="text"
                                         value={this.placeholder}
                                         placeholder="Enter text"
                                         onChange={() => {}}/>
                            <FormControl.Feedback/>
                            <HelpBlock></HelpBlock>
                        </FormGroup>
                    </Col>
                </Row>
                );
    }

    renderFormatSection() {
        return (
            <Row>
                <Col xs={3} md={3}>
                    <FormGroup controlId="formBasicText"
                               validationState={null}>
                        <ControlLabel>Type - list - movie, ova, series</ControlLabel>
                        <FormControl type="text"
                                     value={this.placeholder}
                                     placeholder="Enter text"
                                     onChange={() => {}}/>
                        <FormControl.Feedback/>
                        <HelpBlock></HelpBlock>
                    </FormGroup>
                </Col>
                <Col xs={3} md={3}>
                    <FormGroup controlId="formBasicText"
                               validationState={null}>
                        <ControlLabel>Duration - timespan</ControlLabel>
                        <FormControl type="text"
                                     value={this.placeholder}
                                     placeholder="Enter text"
                                     onChange={() => {}}/>
                        <FormControl.Feedback/>
                        <HelpBlock></HelpBlock>
                    </FormGroup>
                </Col>
                <Col xs={3} md={3}>
                    <FormGroup controlId="formBasicText"
                               validationState={null}>
                        <ControlLabel>Season number - positive int input</ControlLabel>
                        <FormControl type="text"
                                     value={this.placeholder}
                                     placeholder="Enter text"
                                     onChange={() => {}}/>
                        <FormControl.Feedback/>
                        <HelpBlock></HelpBlock>
                    </FormGroup>
                </Col>
                <Col xs={3} md={3}>
                    <FormGroup controlId="formBasicText"
                               validationState={null}>
                        <ControlLabel>Episode num - positive int input</ControlLabel>
                        <FormControl type="text"
                                     value={this.placeholder}
                                     placeholder="Enter text"
                                     onChange={() => {}}/>
                        <FormControl.Feedback/>
                        <HelpBlock></HelpBlock>
                    </FormGroup>
                </Col>
            </Row>
        );
    }

    renderOriginSection() {
        return (
            <Row>
                    <Col xs={4} md={4}>
                        <FormGroup controlId="formBasicText"
                                   validationState={null}>
                            <ControlLabel>Director - text</ControlLabel>
                            <FormControl type="text"
                                         value={this.placeholder}
                                         placeholder="Enter text"
                                         onChange={() => {}}/>
                            <FormControl.Feedback/>
                            <HelpBlock></HelpBlock>
                        </FormGroup>
                    </Col>
                    <Col xs={4} md={4}>
                        <FormGroup controlId="formBasicText"
                                   validationState={null}>
                            <ControlLabel>Country - text</ControlLabel>
                            <FormControl type="text"
                                         value={this.placeholder}
                                         placeholder="Enter text"
                                         onChange={() => {}}/>
                            <FormControl.Feedback/>
                            <HelpBlock></HelpBlock>
                        </FormGroup>
                    </Col>
                    <Col xs={4} md={4}>
                        <FormGroup controlId="formBasicText"
                                   validationState={null}>
                            <ControlLabel>Language - text</ControlLabel>
                            <FormControl type="text"
                                         value={this.placeholder}
                                         placeholder="Enter text"
                                         onChange={() => {}}/>
                            <FormControl.Feedback/>
                            <HelpBlock></HelpBlock>
                        </FormGroup>
                    </Col>
                </Row>);
    }

    renderPersonalDetailsSection1() {
        return (
            <Row>
                    <Col xs={4} md={4}>
                        <FormGroup controlId="formBasicText"
                                   validationState={null}>
                            <ControlLabel>Tags - text via semicolon</ControlLabel>
                            <FormControl type="text"
                                         value={this.placeholder}
                                         placeholder="Enter text"
                                         onChange={() => {}}/>
                            <FormControl.Feedback/>
                            <HelpBlock></HelpBlock>
                        </FormGroup>
                    </Col>
                    <Col xs={8} md={8}>
                        <FormGroup controlId="formBasicText"
                                   validationState={null}>
                            <ControlLabel>Descr - text</ControlLabel>
                            <FormControl type="text"
                                         value={this.placeholder}
                                         placeholder="Enter text"
                                         onChange={() => {}}/>
                            <FormControl.Feedback/>
                            <HelpBlock></HelpBlock>
                        </FormGroup>
                    </Col>
                    </Row>
                    );
    }

    renderPersonalDetailsSection2() {
        return(
            <Row>
                    <Col xs={3} md={3}>
                        <FormGroup controlId="formBasicText"
                                   validationState={null}>
                            <ControlLabel>Status - dropdown</ControlLabel>
                            <FormControl type="text"
                                         value={this.placeholder}
                                         placeholder="Enter text"
                                         onChange={() => {}}/>
                            <FormControl.Feedback/>
                            <HelpBlock></HelpBlock>
                        </FormGroup>
                    </Col>
                    <Col xs={3} md={3}>
                        <FormGroup controlId="formBasicText"
                                   validationState={null}>
                            <ControlLabel>Stattime - datepicker</ControlLabel>
                            <FormControl type="text"
                                         value={this.placeholder}
                                         placeholder="Enter text"
                                         onChange={() => {}}/>
                            <FormControl.Feedback/>
                            <HelpBlock></HelpBlock>
                        </FormGroup>
                    </Col>
                    <Col xs={3} md={3}>
                        <FormGroup controlId="formBasicText"
                                   validationState={null}>
                            <ControlLabel>End time - datepicker</ControlLabel>
                            <FormControl type="text"
                                         value={this.placeholder}
                                         placeholder="Enter text"
                                         onChange={() => {}}/>
                            <FormControl.Feedback/>
                            <HelpBlock></HelpBlock>
                        </FormGroup>
                    </Col>
                    <Col xs={3} md={3}>
                        <FormGroup controlId="formBasicText"
                                   validationState={null}>
                            <ControlLabel>Dropped on episode - positive int input whown if status is dropped and type != movie</ControlLabel>
                            <FormControl type="text"
                                         value={this.placeholder}
                                         placeholder="Enter text"
                                         onChange={() => {}}/>
                            <FormControl.Feedback/>
                            <HelpBlock></HelpBlock>
                        </FormGroup>
                    </Col>
                </Row>
                );
    }

    test() {
        return { /*
                <Row>
                    <Col xs={4} md={4} >
                    <PanelGroup accordion id="accordion-uncontrolled-example" defaultActiveKey="2">
                      <Panel eventKey="1">
                        <Panel.Heading>
                          <Panel.Title toggle>Panel heading 1</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body collapsible>Panel content 1</Panel.Body>
                      </Panel>
                    </PanelGroup>

                    </Col>
                </Row>
                */
        };
    }

    render() {
        return (
            <Form>

                <Row>
                    <Col xs={8} md={8}>
                        <h4>General</h4>
                    </Col>
                    <Col xs={2} md={2}>
                        <Button bsStyle="info" bsSize="small" onClick={() => {}}>Parse from WA</Button>
                    </Col>
                    <Col xs={2} md={2}>
                        <Button bsStyle="primary" bsSize="small" onClick={() => {}}>Find in DB</Button>
                    </Col>
                </Row>
                {this.renderGeneralSection()}

                <Row>
                    <Col xs={12} md={12}>
                        <hr/>
                        <h4>Format</h4>
                    </Col>
                </Row>
                {this.renderFormatSection()}

                <Row>
                    <Col xs={12} md={12}>
                        <hr/>
                        <h4>Origin</h4>
                    </Col>
                </Row>
                    {this.renderOriginSection()}

                <Row>
                    <Col xs={12} md={12}>
                        <hr/>
                        <h4>Personal details</h4>
                    </Col>
                </Row>
                {this.renderPersonalDetailsSection1()}
                {this.renderPersonalDetailsSection2()}


            </Form>
        );
    }
}

export default AddNewAnime;