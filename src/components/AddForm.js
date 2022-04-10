import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { ResourceContext } from '../contexts/resourceContext'
import { useContext, useState } from 'react'

const AddForm = () => {
    const {addResource} = useContext(ResourceContext)
    const [newresource, setnewresource] = useState({name:'',location:'',maxCapacity:'',maxTime:'',status:''})

    const onInputChange = (e) => {
        setnewresource({...newresource, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, location, maxCapacity, maxTime, status)
        addResource(name, location, maxCapacity, maxTime, status)
    }
    

    const {name,location,maxCapacity,maxTime,status} = newresource
    return (<>
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
            <Form.Control
                name = "name"
                value = {name}
                onChange={(e) => onInputChange(e)}
                type = "text"
                placeholder = "name *"
                required
            >
            </Form.Control >
        </Form.Group>
        
        <Form.Group className="mb-3">
            <Form.Control
                name="location"
                value={location}
                onChange={(e) => onInputChange(e) }
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
                onChange={(e) => onInputChange(e) }
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
                onChange={(e) => onInputChange(e)}
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
                onChange={(e) => onInputChange(e)}
                type="text"
                placeholder="status *"
                required
            >
            </Form.Control>
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