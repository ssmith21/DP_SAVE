import { useContext, useState, useEffect } from 'react'
import { ResourceContext } from '../contexts/resourceContext'

import React from 'react'
import Resource from './Resource'

// import resources from '../data/resourcesData.json'
import { Modal, Button, Alert } from 'react-bootstrap'
import AddForm from './AddForm'




const ResourceList = () => {
  
  const {resources} = useContext(ResourceContext)

  const [show, setshow] = useState(false)
  const handleShow = () => setshow(true)
  const handleClose = () => setshow(false)

  const [showalert, setshowalert] = useState(false)
  // const handleShowAlert = () => setshowalert(true)

  const handleShowAlert = () => {
    setshowalert(true)
    setTimeout(() => {
      setshowalert(false)
    },2000)
  }

  useEffect(() => {
    handleClose()
    return () => {
      handleShowAlert()
    }
  }, [resources]) // re-render resources after every resource update and on initial render
  

  return (
    <>
    <div className="table-title">
      <div className="row">
        <div className="col-sm-6">
          <h2>Manage <b>Resources</b></h2>
        </div>
        <div className="col-sm-6">
          <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Resource</span></Button>
        </div>
      </div>
    </div>
    
    <Alert show={showalert} variant="success" onClose={() => setshowalert(false)} dismissible>
      Resource list successfully updated
    </Alert>
    
    <table class="table table-striped table-hober">
      <thead>
        <tr>
          <th>Name</th>
          <th>Location</th>
          <th>maxCapacity</th>
          <th>maxTime</th>
          <th>status</th>
          <th>Actoins</th>
        </tr>
      </thead>
        <tbody>
          {
            resources
              .sort((a,b)=>(a.name<b.name ? -1 : 1)) // sort by name, subject to change
              .map((resource) => (
                <tr key={resource.id}>
                  <Resource resource={resource} />
                </tr>
              ))
          }
        </tbody>
    </table>

      <Modal show={show} onHide={handleClose} >
      <Modal.Header closeButton>
        <Modal.Title>
          Add Employee
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <AddForm/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>

    </>

    
  )
}

export default ResourceList

