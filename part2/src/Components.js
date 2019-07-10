import React from "react"

const filterSearch= (array, string) => {
    return array.filter(object =>
        Object.keys(object).some(objKey => object[objKey].toLowerCase().includes(string.toString().toLowerCase())));
};

const Person = (person) => {
    return (
        <div>
            <p>{person.person.name}</p>
            <p>{person.person.number}</p>
            <hr/>
        </div>
    )
};

//Maps through names and calls Person
const showNames = (persons) => persons.map(person => /*console.log(matchPerson) ||*/
    <Person
        key={person.name}
        person={person}

    />
);

export {Person, showNames, filterSearch}