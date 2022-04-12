import React from 'react'
import { InputGroup, Toast, Col, Row, Form, Button } from 'react-bootstrap'

const AddFormReservation = () => {
    const [showparticipants, setshowparticipants] = React.useState(false)
    const toggleShowParticipants = () => (setshowparticipants(!showparticipants))

    return (
        <Form>
            <Form.Group className="mb-3">
                <Row>
                    <Col xs={4}>
                        <Form.Label>Start Time</Form.Label>
                        <Form.Control type="time" />
                        <Form.Text className="text-muted">Start time of the reservation</Form.Text>
                    </Col>
                    <Col xs={4}>
                        <Form.Label>End Time</Form.Label>
                        <Form.Control type="time" />
                        <Form.Text className="text-muted">End time of the reservation</Form.Text>
                    </Col>
                    <Col xs={4}>
                        <Form.Label>Repetition</Form.Label>
                        <Form.Check type="radio" label="no repetition" name="repetition"></Form.Check>
                        <Form.Check type="radio" label="repeats daily" name="repetition"></Form.Check>
                        <Form.Check type="radio" label="repeats weekly" name="repetition"></Form.Check>
                        <Form.Text className="text-muted">Does the reservation Repeat?</Form.Text>
                    </Col>
                </Row>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Lab Name</Form.Label>
                <Form.Control type="text" placeholder="Name *" required />
                <Form.Text className="text-muted">The name of the lab</Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Search participant's Email address (Optional) </Form.Label>
                <InputGroup className="mb-3">
                    <Button variant="primary">
                        Add Participant
                    </Button>
                    <Form.Control type="search" placeholder="participant_email@example.com" list="participantList" />
                </InputGroup>
                <Form.Text className="text-muted">Search for the participant to add to the lab by email</Form.Text>
            </Form.Group>

            <datalist id="participantList">
                <option value="Participant_1@mail.com" />
                <option value="aaaa@mail.com" />
                <option value="bbbb@mail.com" />
                <option value="Participant_1@mail.com" />
            </datalist>

            <Form.Group>
                <Row>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label={showparticipants ? "Hide participants" : "Show participants"}
                        onChange={toggleShowParticipants}
                    />
                </Row>
                <Row>
                    {
                        showparticipants
                            ? (<>
                                <Toast>
                                    {/* TODO: unhardcode this, make it all dynamic */}
                                    <Toast.Header>
                                        <strong className="me-auto">particiapnt_1@mail.com</strong>
                                    </Toast.Header>
                                </Toast>
                                <Toast>
                                    <Toast.Header>
                                        <strong className="me-auto">2_participant@mail.com</strong>
                                    </Toast.Header>
                                </Toast>
                            </>)
                            : <></>
                    }
                </Row>
            </Form.Group>
            <br />

            <Form.Group>
                <Form.Label>Description of lab activity</Form.Label>
                <Form.Control as="textarea" rows={4} />
            </Form.Group>

            <br />
            <Button variant="success" type="submit" block>
                Add Reservation
            </Button>

        </Form>
    )
}

export default AddFormReservation

