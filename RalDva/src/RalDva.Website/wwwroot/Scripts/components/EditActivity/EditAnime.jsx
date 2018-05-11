// react
import React from "react";
import ReactDom from "react-dom";

// react-bootstrap
import { Row, Col, Form, FormGroup, ControlLabel, FormControl, HelpBlock, Button } from "react-bootstrap";

import { DateTimePicker, Multiselect, Combobox, NumberPicker } from "react-widgets";

class EditAnime extends React.Component {
    constructor(props) {
        super(props);

        this.placeholder = "";

        this.genres = ["genre1", "genre2", "genre3", "genre4", "genre5"];
        this.types = ["TvSeries", "OVA", "movie"];

        this.state = {
            year: new Date(),
            name: "",
            genre: [this.genres[0]],
            type: this.types[0],
            duration: 0,
            seasonNumber: 0,
            episodeCount: 0
        };

        this.onTxtChange = this.onTxtChange.bind(this);
    }

    onTxtChange(input) {
        this.setState({ ...this.state, [input.name]: input.value });
    }

    renderGeneralSection() {
        return (
            <Row>
                <Col xs={4} md={4}>
                    <FormGroup controlId="editAnime-name"
                        validationState={null}>
                        <ControlLabel>Name</ControlLabel>
                        <FormControl type="text"
                            value={this.state.name}
                            placeholder="Enter text"
                            name="name"
                            onChange={e => this.onTxtChange(e.target)} />
                        <FormControl.Feedback />
                        <HelpBlock></HelpBlock>
                    </FormGroup>
                </Col>
                <Col xs={4} md={4}>
                    <FormGroup controlId="editAnime-year"
                        validationState={null}>
                        <ControlLabel>Year</ControlLabel>
                        <DateTimePicker id="year-datepicker"
                            value={this.state.year}
                            format="YYYY"
                            views={["decade"]}
                            footer={false}
                            time={false}
                            onChange={year => this.setState({ ...this.state, year })} />
                        <FormControl.Feedback />
                        <HelpBlock></HelpBlock>
                    </FormGroup>
                </Col>
                <Col xs={4} md={4}>
                    <FormGroup controlId="editAnime-genre"
                        validationState={null}>
                        <ControlLabel>Genres</ControlLabel>
                        <Multiselect data={this.genres}
                            value={this.state.genre}
                            onChange={genre => this.setState({ ...this.state, genre })}
                            caseSensitive={false}
                            minLength={3}
                            filter='contains' />
                        <FormControl.Feedback />
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
                    <FormGroup controlId="editAnime-type"
                        validationState={null}>
                        <ControlLabel>Type</ControlLabel>
                        <Combobox data={this.types}
                            value={this.state.type}
                            onChange={type => this.setState({ ...this.state, type })}
                            caseSensitive={false}
                            filter='contains' />
                        <FormControl.Feedback />
                        <HelpBlock></HelpBlock>
                    </FormGroup>
                </Col>
                <Col xs={3} md={3}>
                    <FormGroup controlId="editAnime-duration"
                        validationState={null}>
                        <ControlLabel>{this.state.type !== "TvSeries" ? "Duration (min)" : "Duration (min per episode)"}</ControlLabel>

                        <NumberPicker min={0}
                            max={999}
                            value={this.state.duration}
                            format={"(0):00"}
                            parse={val => val.substring(0, val.length - 3)}
                            onChange={duration => this.setState({ ...this.state, duration })} />

                        <FormControl.Feedback />
                        <HelpBlock></HelpBlock>
                    </FormGroup>
                </Col>
                <Col xs={3} md={3}>
                    {
                        this.state.type !== "movie" ?
                            (
                                <FormGroup controlId="editAnime-seasonNumber"
                                    validationState={null}>
                                    <ControlLabel>Season number</ControlLabel>

                                    <NumberPicker min={1}
                                        max={999}
                                        value={this.state.seasonNumber}
                                        onChange={seasonNumber => this.setState({ ...this.state, seasonNumber })} />

                                    <FormControl.Feedback />
                                    <HelpBlock></HelpBlock>
                                </FormGroup>
                            ) :
                            <span></span>
                    }
                </Col>
                <Col xs={3} md={3}>
                    {
                        this.state.type !== "movie" ?
                            (
                                <FormGroup controlId="editAnime-episodeCount"
                                    validationState={null}>
                                    <ControlLabel>Episode count</ControlLabel>

                                    <NumberPicker min={1}
                                        max={999}
                                        value={this.state.episodeCount}
                                        onChange={episodeCount => this.setState({ ...this.state, episodeCount })} />

                                    <FormControl.Feedback />
                                    <HelpBlock></HelpBlock>
                                </FormGroup>
                            ) :
                            <span></span>
                    }
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
                            onChange={() => { }} />
                        <FormControl.Feedback />
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
                            onChange={() => { }} />
                        <FormControl.Feedback />
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
                            onChange={() => { }} />
                        <FormControl.Feedback />
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
                            onChange={() => { }} />
                        <FormControl.Feedback />
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
                            onChange={() => { }} />
                        <FormControl.Feedback />
                        <HelpBlock></HelpBlock>
                    </FormGroup>
                </Col>
            </Row>
        );
    }

    renderPersonalDetailsSection2() {
        return (
            <Row>
                <Col xs={4} md={4}>
                    <FormGroup controlId="editAnime-"
                        validationState={null}>
                        <ControlLabel>Status - Combobox</ControlLabel>
                        <FormControl type="text"
                            value={this.placeholder}
                            placeholder="Enter text"
                            onChange={() => { }} />
                        <FormControl.Feedback />
                        <HelpBlock></HelpBlock>
                    </FormGroup>
                </Col>
                <Col xs={4} md={4}>
                    <FormGroup controlId="editAnime-"
                        validationState={null}>
                        <ControlLabel>Stattime - datepicker</ControlLabel>
                        <DateTimePicker id="start-time-datepicker" value={new Date()} onChange={() => { }} />
                        <FormControl.Feedback />
                        <HelpBlock></HelpBlock>
                    </FormGroup>
                </Col>
                {this.renderEndTimeOrDropppedControl()}
            </Row>
        );
    }

    renderEndTimeOrDropppedControl() {
        return (2 > 1 ? //has not dropped status
            <Col xs={4} md={4}>
                <FormGroup controlId="editAnime-"
                    validationState={null}>
                    <ControlLabel>End time - datepicker</ControlLabel>
                    <DateTimePicker id="end-time-datepicker" value={new Date()} onChange={() => { }} />
                    <FormControl.Feedback />
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
                        onChange={() => { }} />
                    <FormControl.Feedback />
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
                        <Button bsStyle="info" bsSize="small" onClick={() => { }}>Parse from WA</Button>
                    </Col>
                    <Col xs={2} md={2}>
                        <Button bsStyle="primary" bsSize="small" onClick={() => { }}>Find in DB</Button>
                    </Col>
                </Row>
                {this.renderGeneralSection()}

                <Row>
                    <Col xs={12} md={12}>
                        <hr />
                        <h4>Format</h4>
                    </Col>
                </Row>
                {this.renderFormatSection()}

                <Row>
                    <Col xs={12} md={12}>
                        <hr />
                        <h4>Origin</h4>
                    </Col>
                </Row>
                {this.renderOriginSection()}

                <Row>
                    <Col xs={12} md={12}>
                        <hr />
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