// react
import React from "react";
import ReactDom from "react-dom";

// react-bootstrap
import { Row, Col, Form, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from "react-bootstrap";

import { DateTimePicker } from 'react-widgets';

class EditAnime extends React.Component {
    constructor(props) {
        super(props);

        this.placeholder = "";
    }

    renderGeneralSection() {
        return (
                <Row>
                    <Col xs={4} md={4}>
                        <FormGroup controlId="editAnime-name"
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
                        <FormGroup controlId="editAnime-year"
                                   validationState={null}>
                            <ControlLabel>Year - datetimepicker</ControlLabel>
                            <DateTimePicker id="year-datepicker" 
                                            value={new Date()} 
                                            format="YYYY"
                                            views={["decade"]}
                                            footer={false}
                                            time={false}
                                            onChange={() => {}} />
                            <FormControl.Feedback/>
                            <HelpBlock></HelpBlock>
                        </FormGroup>
                    </Col>
                    <Col xs={4} md={4}>
                        <FormGroup controlId="editAnime-"
                                   validationState={null}>
                            <ControlLabel>Genres - Multiselect</ControlLabel>
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
                    <FormGroup controlId="editAnime-"
                               validationState={null}>
                        <ControlLabel>Type - Combobox - movie, ova, series</ControlLabel>
                        <FormControl type="text"
                                     value={this.placeholder}
                                     placeholder="Enter text"
                                     onChange={() => {}}/>
                        <FormControl.Feedback/>
                        <HelpBlock></HelpBlock>
                    </FormGroup>
                </Col>
                <Col xs={3} md={3}>
                    <FormGroup controlId="editAnime-"
                                validationState={null}>

                        <ControlLabel>Duration - NumberPicker</ControlLabel>
                        <FormControl type="text"
                                     value={this.placeholder}
                                     placeholder="Enter text"
                                     onChange={() => {}}/>
                        <FormControl.Feedback/>
                        <HelpBlock>show per ep label if type is series</HelpBlock>
                    </FormGroup>
                </Col>
                <Col xs={3} md={3}>
                    <FormGroup controlId="editAnime-"
                               validationState={null}>
                        <ControlLabel>Season number - NumberPicker</ControlLabel>
                        <FormControl type="text"
                                     value={this.placeholder}
                                     placeholder="Enter text"
                                     onChange={() => {}}/>
                        <FormControl.Feedback/>
                        <HelpBlock></HelpBlock>
                    </FormGroup>
                </Col>
                <Col xs={3} md={3}>
                    <FormGroup controlId="editAnime-"
                               validationState={null}>
                        <ControlLabel>Episode num - NumberPicker</ControlLabel>
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
                        <FormGroup controlId="editAnime-"
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
                        <FormGroup controlId="editAnime-"
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
                        <FormGroup controlId="editAnime-"
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
                </Row>
                );
    }

    renderPersonalDetailsSection1() {
        return (
            <Row>
                <Col xs={4} md={4}>
                    <FormGroup controlId="editAnime-"
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
                        <FormGroup controlId="editAnime-"
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
                <Col xs={4} md={4}>
                    <FormGroup controlId="editAnime-"
                               validationState={null}>
                        <ControlLabel>Status - Combobox</ControlLabel>
                        <FormControl type="text"
                                     value={this.placeholder}
                                     placeholder="Enter text"
                                     onChange={() => {}}/>
                        <FormControl.Feedback/>
                        <HelpBlock></HelpBlock>
                    </FormGroup>
                </Col>
                <Col xs={4} md={4}>
                    <FormGroup controlId="editAnime-"
                               validationState={null}>
                        <ControlLabel>Stattime - datepicker</ControlLabel>
                        <DateTimePicker id="start-time-datepicker" value={new Date()} onChange={() => {}}/>
                        <FormControl.Feedback/>
                        <HelpBlock></HelpBlock>
                    </FormGroup>
                </Col>
                {this.renderEndTimeOrDropppedControl()}
            </Row>
            );
    }

    renderEndTimeOrDropppedControl () {
        return (2 > 1 ? //has not dropped status
            <Col xs={4} md={4}>
                <FormGroup controlId="editAnime-"
                           validationState={null}>
                    <ControlLabel>End time - datepicker</ControlLabel>
                    <DateTimePicker id="end-time-datepicker" value={new Date()} onChange={() => {}}/>
                    <FormControl.Feedback/>
                    <HelpBlock></HelpBlock>
                </FormGroup>
            </Col>
            : <Col xs={4} md={4}>
                  <FormGroup controlId="editAnime-"
                             validationState={null}>
                      <ControlLabel>
                          Dropped on episode - NumberPicker whown if status is dropped and type != movie
                      </ControlLabel>
                      <FormControl type="text"
                                   value={this.placeholder}
                                   placeholder="Enter text"
                                   onChange={() => {}}/>
                      <FormControl.Feedback/>
                      <HelpBlock></HelpBlock>
                  </FormGroup>
              </Col>
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

export default EditAnime;