import React from "react"
import axios from 'axios'


const filterSearch = (array, string) => {
    const lowerString = string.toString().toLowerCase();
    return array.filter(object =>
        Object.keys(object).some(objKey => object[objKey].toString().toLowerCase().includes(lowerString)));
};

const Person = (person) => {
    console.log("jo");
    return (
        <div>
            <p>{person.person.name}</p>
            <p>{person.person.number}</p>
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