import React from 'react'
import EditForm from './EditForm'
import { ResourceContext } from '../contexts/resourceContext'
import { useContext, useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'

const Resource = ({resource}) => {
    const { deleteResource }= useContext(ResourceContext)
    
    const [show, setshow] = useState(false)

    const handleShow = () => setshow(true)
    const handleClose = () => setshow(false)

    useEffect(() => {
        handleClose()
    }, [resource])
    

    const {
        id,
        name,
        location,
        maxCapacity,
        maxTime,
        status,
    } = resource    
    return (<>
        <td>{name}</td>
        <td>{location}</td>
        <td>{maxCapacity}</td>
        <td>{maxTime}</td>
        <td>{status}</td>
        <td>
            <button 
                onClick={handleShow}
                class="btn text-warning" 
                data-toggle="modal">
                <i class="material-icons" data-toggle="tooltip" title="Edit">
                    &#xE254;
                </i>
            </button>
            <button
                onClick={()=>deleteResource(id)}
                class="btn text-danger btn-act" 
                data-toggle="modal">
                <i class="material-icons" data-toggle="tooltip" title="Delete">
                    &#xE872;
                </i>
            </button>
        </td>
        <Modal show={show} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>
                    Edit Resource
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <EditForm resourceToUpdate={resource}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </>)
}

export default Resource