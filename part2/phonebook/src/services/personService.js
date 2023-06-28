import axios from 'axios'
const baseURL = "http://localhost:3001/api/persons"

const getAllPersons = async () => {
    const request = axios.get(baseURL)
    return await request.then(response => response.data)
}

const createPerson = async (person) => {
    const request = axios.post(baseURL, person)
    return await request.then(response => response.data)
}

const deletePerson = async (id) => {
    const request = axios.delete(`${baseURL}/${id}`)
    return await request.then(response => response.data)
}

const updatePerson = async (id, person) => {
    const request = axios.put(`${baseURL}/${id}`,person)
    return await request.then(response => response.data)
}

export default {
    getAllPersons,
    createPerson,
    deletePerson,
    updatePerson
}