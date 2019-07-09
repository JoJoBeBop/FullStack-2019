import React, {useState} from 'react'
import ReactDOM from "react-dom";

const Person = (person) => {
    console.log(person);
    return (
        <p>{person.person.name}</p>
    )
};

const App = () => {

    const [persons, setPersons] = useState([
        {name: 'Arto Hellas'}
    ]);
    const [newName, setNewName] = useState('');

    //setNewName
    const handleNewName = (event) => {
        console.log(event.target.value);
        setNewName(event.target.value)
    };

    //Adds newName to the list
    const addName = (event) => {
        event.preventDefault();
        const nameObject = {
            name: newName
        };

        setPersons(persons.concat(nameObject));
        setNewName("")
    };


    const showNames = () => persons.map(person => console.log(person.name) ||
        <Person
            key={person.name}
            person={person}
        />
    );


    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addName}>
                <div>
                    name:
                    <br/>
                    <input value={newName}
                           onChange={handleNewName}/>
                    <button type="submit">add</button>

                </div>
                <div>
                </div>
            </form>
            <h2>Numbers</h2>
            {showNames()}


        </div>
    )

};


export default App;
