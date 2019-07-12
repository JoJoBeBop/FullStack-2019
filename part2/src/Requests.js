import axios from 'axios'
const personsURL = "http://localhost:3001/persons";

const getAllPersons = () => {
    const request = axios.get(personsURL);
    return request.then(response => response.data)
};

const createPerson = (newObject) => {
    console.log("Reqs createNewPerson");
    const request = axios.post(personsURL, newObject);
    return request.then(response => response.data)
};

export default {getAllPersons, createPerson}