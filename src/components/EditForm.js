import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { ResourceContext } from '../contexts/resourceContext'
import { useContext, useState } from 'react'

const EditForm = ({ resourceToUpdate}) => {
    
    const { updateResource } = useContext(ResourceContext)

    const id = resourceToUpdate.id
    const [name, setname] = useState(resourceToUpdate.name)
    const [location, setlocation] = useState(resourceToUpdate.location)
    const [maxCapacity, setmaxCapacity] = useState(resourceToUpdate.maxCapacity)
    const [maxTime, setmaxTime] = useState(resourceToUpdate.maxTime)
    const [status, setstatus] = useState(resourceToUpdate.status)

    const updatedResource = { id, name, location, maxCapacity, maxTime, status }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateResource(id, updatedResource)
    }
    
    return (<>
        <Form onSubmit={handleSubmit}>
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

            <Form.Group className="mb-3">
                <Form.Control
                    name="maxTime"
                    value={maxTime}
                    onChange={(e) => setmaxTime(e.target.value)}
                    type="number"
                    placeholder="maxTime *"
                    required
                >
                </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control
                    name="status"
                    value={status}
                    onChange={(e) => setstatus(e.target.value)}
                    type="text"
                    placeholder="status *"
                    required
                >
                </Form.Control>
            </Form.Group>

            <Button variant="success" type="submit" block>
                Edit Resource
            </Button>

        </Form>

    </>)
}

export default EditForm


