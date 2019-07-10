import React from "react"

const filterSearch = (array, string) => {
    console.log(array);
    return array.filter(object =>
        Object.keys(object).some(objKey => object[objKey].toLowerCase().includes(string.toString().toLowerCase())));
};

const Person = (person) => {
    return (
        <div>
            <p>{person.person.name}</p>
            <hr/>
        </div>
    )
};

//Maps through names and calls Person
const showNames = (countries) => countries.map(person => /*console.log(matchPerson) ||*/
    <Person
        key={person.name}
        person={person}

    />
);

export {Person, showNames, filterSearch}