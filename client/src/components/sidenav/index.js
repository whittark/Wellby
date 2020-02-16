import React from "react";
import "./index.css";
import { Container, Row, Accordion,  Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FILTER } from "../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faRunning } from "@fortawesome/free-solid-svg-icons";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faAllergies } from "@fortawesome/free-solid-svg-icons";
import { faCouch } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faStarOfLife } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";

function Sidenav (){
    const dispatch = useDispatch();
    const handleChange = e => {
        e.persist();
        dispatch(FILTER(e.target.value));
    };
    return (
        <Container id="sidenavContainer" className="align-left">
            <Row>
                <h3 id="filterHeader">Filters</h3>
            </Row>
            <Row>
                <Accordion id="filter" defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle id="filterHead" as={Card.Header} eventKey="0">
                    BY CATEGORY
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body id="filterBody">
                            <div className="form-check">
                                <Row>
                                    <label>
                                        <input
                                            onChange={handleChange}
                                            type="radio"
                                            name="category"
                                            value="goodEats"
                                            defaultChecked={false}
                                            className="form-check-input"
                                        />
                                        <FontAwesomeIcon icon={faUtensils} className="category" id="goodEats"/>Good Eats
                                    </label>
                                </Row>
                                <Row>
                                    <label>
                                        <input
                                            onChange={handleChange}
                                            type="radio"
                                            name="category"
                                            value="sleep"
                                            defaultChecked={false}
                                            className="form-check-input"
                                        />
                                        <FontAwesomeIcon icon={faBed} className="category" id="sleep"/> Sleep
                                    </label>
                                </Row>
                                <Row>
                                    <label>
                                        <input
                                            onChange={handleChange}
                                            type="radio"
                                            name="category"
                                            value="excercise"
                                            defaultChecked={false}
                                            className="form-check-input"
                                        />
                                        <FontAwesomeIcon icon={faRunning} className="category" id="exercise"/> Exercise
                                    </label>
                                </Row>
                                <Row>
                                    <label>
                                        <input
                                            onChange={handleChange}
                                            type="radio"
                                            name="category"
                                            value="veggie"
                                            defaultChecked={false}
                                            className="form-check-input"
                                        />
                                        <FontAwesomeIcon icon={faSeedling} className="category" id="veggie"/> Veg/Vegan
                                    </label>
                                </Row>
                                <Row>
                                    <label>
                                        <input
                                            onChange={handleChange}
                                            type="radio"
                                            name="category"
                                            value="allergies"
                                            defaultChecked={false}
                                            className="form-check-input"
                                        />
                                        <FontAwesomeIcon icon={faAllergies} className="category" id="allergies"/> Allergy Friendly
                                    </label>
                                </Row>
                                <Row>
                                    <label>
                                        <input
                                            onChange={handleChange}
                                            type="radio"
                                            name="category"
                                            value="relaxation"
                                            defaultChecked={false}
                                            className="form-check-input"
                                        />
                                        <FontAwesomeIcon icon={faCouch} className="category" id="relaxation"/> Relaxified
                                    </label>
                                </Row>
                                <Row>
                                    <label>
                                        <input
                                            onChange={handleChange}
                                            type="radio"
                                            name="category"
                                            value="seasonal"
                                            defaultChecked={false}
                                            className="form-check-input"
                                        />
                                        <FontAwesomeIcon icon={faSun} className="category" id="seasonal"/> Seasonal
                                    </label>
                                </Row>
                                <Row>
                                    <label>
                                        <input
                                            onChange={handleChange}
                                            type="radio"
                                            name="category"
                                            value="events"
                                            defaultChecked={false}
                                            className="form-check-input"
                                        />
                                        <FontAwesomeIcon icon={faCalendar} className="category" id="events"/> Events
                                    </label>
                                </Row>
                                <Row>
                                    <label>
                                        <input
                                            onChange={handleChange}
                                            type="radio"
                                            name="category"
                                            value="other"
                                            defaultChecked={false}
                                            className="form-check-input"
                                        />
                                        <FontAwesomeIcon icon={faStarOfLife} className="category" id="other"/> Other
                                    </label>
                                </Row>
                                <Row>
                                    <label>
                                        <input
                                            onChange={handleChange}
                                            type="radio"
                                            name="category"
                                            value="all"
                                            defaultChecked={false}
                                            className="form-check-input"
                                        />
                                        All
                                    </label>
                                </Row>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle id="filterHead" as={Card.Header} eventKey="1">
                    BY POST TYPE
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body id="filterBody">
                        <div className="form-check">
                            <Row>
                                <label>
                                    <input
                                        onChange={handleChange}
                                        type="radio"
                                        name="postType"
                                        value="question"
                                        defaultChecked={false}
                                        className="form-check-input"
                                    />
                                    <FontAwesomeIcon icon={faQuestionCircle} className="category" id="question"/> Questions
                                </label>
                            </Row>
                            <Row>
                                <label>
                                    <input
                                        onChange={handleChange}
                                        type="radio"
                                        name="postType"
                                        value="announcement"
                                        defaultChecked={false}
                                        className="form-check-input"
                                    />
                                    <FontAwesomeIcon icon={faEnvelopeSquare} className="category" id="announcement"/> Announcements
                                </label>
                            </Row>
                            <Row>
                                <label>
                                    <input
                                        onChange={handleChange}
                                        type="radio"
                                        name="postType"
                                        value="all"
                                        defaultChecked={false}
                                        className="form-check-input"
                                    />
                                    All
                                </label>
                            </Row>
                        </div>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </Accordion>
            </Row>
        </Container>

    )
};

export default Sidenav;