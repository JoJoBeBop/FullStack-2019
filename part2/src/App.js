import React, {useState} from 'react'
import ReactDOM from "react-dom";

const Person = (person) => {
    return (
        <div>
            <p>{person.person.name}</p>
            <p>{person.person.number}</p>
            <hr/>
        </div>
    )
};

const App = () => {

    const [persons, setPersons] = useState([
        {
            name: 'Arto Hellas',
            number: "0502566488"
        }
    ]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');


    //setNewName
    const handleNewName = (event) => {
        persons.map((per) => {
                console.log(per.name);

                if (per.name === event.target.value) {
                    alert(`${per.name} is already in use pal`)
                }
            }
        );

        setNewName(event.target.value)
    };

    //setNewNumber
    const handleNewNumber = (event) => {
        persons.map((per) => {
                console.log(per.number);

                if (per.number === event.target.value) {
                    alert(`${per.number} is already in use pal`)
                }
            }
        );

        setNewNumber(event.target.value)
    };

    //Adds newName to the list
    const addName = (event) => {
        event.preventDefault();
        const nameObject = {
            name: newName,
            number: newNumber
        };

        setPersons(persons.concat(nameObject));
        setNewName("")
    };


    //Maps through names and calls Person
    const showNames = () => persons.map(person => /*console.log(person) ||*/
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
                    Name:<br/>
                    <input value={newName}
                           onChange={handleNewName}/>
                </div>
                <div>
                    Number:<br/>
                    <input
                        value={newNumber}
                        onChange={handleNewNumber}/>

                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {showNames()}


        </div>
    )

};


export default App;
