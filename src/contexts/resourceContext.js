import resourcesData from '../data/resourcesData.json'
import { useState, createContext } from 'react'
import {v4 as uuidv4} from 'uuid'

export const ResourceContext = createContext()

const ResourceContextProvider = (props) =>{
    const [resources, setresources] = useState(resourcesData)
    
    const addResource = (name,location,maxCapacity,maxTime,status) => {
        setresources([
            ...resources,
            {id:uuidv4(),name,location,maxCapacity,maxTime,status}
        ])
    }

    const deleteResource = (id) => {
        setresources(resources.filter(
            resource => resource.id !== id
        ))
    }

    const updateResource = (id, updatedResource) => {
        setresources(resources.map(
            (resource) => resource.id === id ? updatedResource : resource)
        )
    }

    return(
        <ResourceContext.Provider value={{ resources, addResource, deleteResource, updateResource }}>
            {props.children}
        </ResourceContext.Provider>
    )
}

export default ResourceContextProvider