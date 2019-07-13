import axios from 'axios'
const personsURL = "http://localhost:3001/persons";

const createPerson = (newObject) => {
    console.log("Reqs createNewPerson");
    const req = axios.post(personsURL, newObject);
    return req.then(res => res.data)
};

const getAllPersons = () => {
    const req = axios.get(personsURL);
    return req.then(res => console.log(res.data) ||
        res.data)
};

const removePerson = personId => {
    console.log("removed");
    const req = axios.delete(`${personsURL}/${personId}`);
    return req.then(res => console.log(res.data) ||
        res.data)
};

const updatePerson = (id, newObject) => {
    const req = axios.put(`${personsURL}/${id}`, newObject);
    return req.then(res => res.data)
};



export default {getAllPersons, createPerson, updatePerson, removePerson}