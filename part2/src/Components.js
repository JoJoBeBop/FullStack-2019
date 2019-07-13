import React from "react"
import axios from 'axios'
import requestFunction from "./Requests"

const pleaseWork = (person) => {
    if (window.confirm(`Do you want to delete this number: ${person.person.number}`)) {
        requestFunction.removePerson(person.person.id)

    }

    /*
        requestFunction.removePerson(person.person.id)
    */
}

const filterSearch = (array, string) => {
    const lowerString = string.toString().toLowerCase();
    return array.filter(object =>
        Object.keys(object).some(objKey => object[objKey].toString().toLowerCase().includes(lowerString)));
};

const Person = (person) => {
    return (
        <div>
            <p>{person.person.name}</p>
            <p>{person.person.number}</p>
            <button onClick={(e) => pleaseWork(person, e)}>Delete</button>
            <hr/>
        </div>
    )
};


//Maps through names and calls Person
const showNames = (persons) => persons.map(person => {
        return (
            <Person
                key={person.name}
                person={person}

            />
        )
    }
);

export {showNames, filterSearch}