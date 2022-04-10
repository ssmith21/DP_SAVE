import React from 'react'
import { Form, Button, Col, Row, InputGroup } from 'react-bootstrap'
import { ResourceContext } from '../contexts/resourceContext'
import { useContext, useState } from 'react'

const EditForm = ({ resourceToUpdate}) => {
    
    const { updateResource } = useContext(ResourceContext)

    const id = resourceToUpdate.id
    const [name, setname] = useState(resourceToUpdate.name)
    const [location, setlocation] = useState(resourceToUpdate.location)
    const [maxCapacity, setmaxCapacity] = useState(resourceToUpdate.maxCapacity)
    const [maxTime, setmaxTime] = useState(resourceToUpdate.maxTime)
    const [buffer, setbuffer] = useState(resourceToUpdate.buffer)
    const [cancelTime, setcancelTime] = useState(resourceToUpdate.cancelTime)
    const [approval, setapproval] = useState(resourceToUpdate.approval)
    const [status, setstatus] = useState(resourceToUpdate.status)

    const updatedResource = { id, name, location, maxCapacity, maxTime, buffer, cancelTime, approval, status }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateResource(id, updatedResource)
    }
    
    return (<>
        <Form onSubmit={handleSubmit}>
            <Form.Label>Resource Name</Form.Label>
            <Form.Group className="mb-3">
                <Form.Control
                    name="name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    type="text"
                    placeholder="name *"
                    required
                >
                </Form.Control >
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control
                    name="location"
                    value={location}
                    onChange={(e) => setlocation(e.target.value)}
                    type="text"
                    placeholder="location *"
                    required
                >
                </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Maximum Capacity</Form.Label>
                <Form.Control
                    name="maxCapacity"
                    value={maxCapacity}
                    onChange={(e) => setmaxCapacity(e.target.value)}
                    type="number"
                    placeholder="max capacity *"
                    required
                >
                </Form.Control>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Col xs={6}>
                    <Form.Label>Maximum Booking time</Form.Label>
                    <Form.Control
                        name="maxTime"
                        value={maxTime}
                        onChange={(e) => setmaxTime(e.target.value)}
                        type="number"
                        placeholder="maxTime *"
                        required
                    >
                    </Form.Control>
                    <Form.Text className="text-muted">Max time to book in minutes (optional, selected by default with maximum 8h).</Form.Text>
                </Col>
                <Col xs={6}>
                    <Form.Label>Buffer time</Form.Label>
                    <Form.Control
                        name="buffer"
                        value={buffer}
                        onChange={(e) => setbuffer(e.target.value)}
                        type="number"
                        placeholder="0"
                    ></Form.Control>
                    <Form.Text className="text-muted">Buffer between reservations in minutes (optional, 0 selected by default )</Form.Text>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
                <Col xs={5}>
                    <Form.Label>Prior Cancellation Limit</Form.Label>
                    <Form.Control
                        name="cancelTime"
                        value={cancelTime}
                        onChange={(e) => setcancelTime(e.target.value)}
                        type="number"
                        placeholder="1440"
                    ></Form.Control>
                    <Form.Text className="text-muted">Amount of time prior to a reservation that the reservation can be cancelled (optional, default 24h)</Form.Text>
                </Col>
                <Col>
                    <Form.Label>Approval From</Form.Label>
                    <Form.Check
                        name="approval"
                        value="everyone"
                        onChange={(e) => setapproval(e.target.value)}
                        type="radio"
                        label="everyone"
                    >
                    </Form.Check>
                    <Form.Check
                        name="approval"
                        value="no one"
                        onChange={(e) => setapproval(e.target.value)}
                        type="radio"
                        label="no one"
                    >
                    </Form.Check>
                    <Form.Check
                        name="approval"
                        value="exceptions"
                        onChange={(e) => setapproval(e.target.value)}
                        type="radio"
                        label="exceptions"
                    >
                    </Form.Check>
                    <Form.Text className="text-muted">The starting status of the resource. If hidden, can add users who can see the status.</Form.Text>
                </Col>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Set status</Form.Label>
                <Form.Check
                    name="status"
                    value="available"
                    onChange={(e) => setstatus(e.target.value)}
                    type="radio"
                    label="available"
                >
                </Form.Check>
                <Form.Check
                    name="status"
                    value="unavailable"
                    onChange={(e) => setstatus(e.target.value)}
                    type="radio"
                    label="unavailable"
                >
                </Form.Check>
                <Form.Check
                    name="status"
                    value="hidden"
                    onChange={(e) => setstatus(e.target.value)}
                    type="radio"
                    label="hidden"
                >
                </Form.Check>
            </Form.Group>

            <Button variant="success" type="submit" block>
                Edit Resource
            </Button>

        </Form>

    </>)
}

export default EditForm


