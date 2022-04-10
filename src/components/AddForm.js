import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { ResourceContext } from '../contexts/resourceContext'
import { useContext, useState } from 'react'

const AddForm = () => {
    const {addResource} = useContext(ResourceContext)
    const [newresource, setnewresource] = useState({ 
        name: '', 
        location: '',
        maxCapacity: '', 
        maxTime: '', 
        buffer: '',
        cancelTime:'',
        approval:'',
        status:''
    })

    const onInputChange = (e) => {
        setnewresource({...newresource, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addResource(name, location, maxCapacity, maxTime, buffer, cancelTime, approval, status)
    }
    
    const { name, location, maxCapacity, maxTime, buffer, cancelTime, approval, status } = newresource
    return (<>
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
            <Form.Label>Resource Name</Form.Label>
            <Form.Control
                name = "name"
                value = {name}
                onChange={(e) => onInputChange(e)}
                type = "text"
                placeholder = "name *"
                required
            >
            </Form.Control >
            <Form.Text className="text-muted">The name of the resource</Form.Text>
        </Form.Group>
        
        <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control
                name="location"
                value={location}
                onChange={(e) => onInputChange(e) }
                type="text"
                placeholder="location *"
                required
            >
            </Form.Control>
            <Form.Text className="text-muted">The location of the reservation</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
            <Form.Label>Maximum Capacity</Form.Label>
            <Form.Control
                name="maxCapacity"
                value={maxCapacity}
                onChange={(e) => onInputChange(e) }
                type="number"
                placeholder="max capacity"
                defaultValue="-1"
                required
            >
            </Form.Control>
            <Form.Text className="text-muted">Maximum capacity for a resource (8 hours by default)</Form.Text>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
            <Col xs={6}>
                <Form.Label>Maximum Booking time</Form.Label>
                <Form.Control
                    name="maxTime"
                    value={maxTime}
                    onChange={(e) => onInputChange(e)}
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
                    defaultValue={0}
                    onChange={(e) => onInputChange(e)}
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
                    onChange={(e) => onInputChange(e)}
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
                    onChange={(e) => onInputChange(e)}
                    type="radio"
                    label="everyone"
                >
                </Form.Check>
                <Form.Check
                    name="approval"
                    value="no one"
                    onChange={(e) => onInputChange(e)}
                    type="radio"
                    label="no one"
                >
                </Form.Check>
                <Form.Check
                    name="approval"
                    value="exceptions"
                    onChange={(e) => onInputChange(e)}
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
                onChange={(e) => onInputChange(e)}
                type="radio"
                label="available" 
            >
            </Form.Check>
            <Form.Check
                name="status"
                value="unavailable"
                onChange={(e) => onInputChange(e)}
                type="radio"
                label="unavailable"
            >
            </Form.Check>
            <Form.Check
                name="status"
                value="unavailable"
                onChange={(e) => onInputChange(e)}
                type="radio"
                label="hidden"
            >
            </Form.Check>
        </Form.Group>



        <Button variant="success" type="submit" block>
            Add Resource
        </Button>

    </Form>

</>)
}

export default AddForm





//           <Form.Group>
//               <Form.Control

//               >

//               </Form.Control>
//           </Form.Group>
//           <Form.Group>
//               <Form.Control

//               >

//               </Form.Control>