import React, { useState, useEffect } from 'react'
import {Person, showNames, filterSearch} from "./Components"
import ReactDOM from "react-dom";
import axios from 'axios'


const App = () => {

    const [persons, setPersons] = useState([]) ;
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [matchPerson, setMatchPerson] = useState("");
    const [newSearch, setNewSearch] = useState(false);

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons').then(response => {
            setPersons(response.data)
        })
    }, []);



    //Dumb way to do it, improve it later with booleans
    const handleFilter = (event) => {
        const newArray = filterSearch(persons, event.target.value)
        console.log(newArray);

        if (filterSearch(persons, event.target.value).length === 0) {
            return (
                setMatchPerson(newArray)
            )

        } else {
            setNewSearch(true);
            setMatchPerson(newArray);

        }
    };

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

    const PersonForm = () => {
        return (
            <form onSubmit={addName}>
                <h2>Add a New Number</h2>

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
        )
    };

    return (
        <div>
            <div>
                <h2>Phonebook</h2>
                Search
                <br/>
                <input onChange={handleFilter}/>
            </div>

            <PersonForm/>

            <h2>Numbers</h2>

            {newSearch === false ? (
                showNames(persons)
            ) : (
                showNames(matchPerson)
            )}


        </div>
    )

};


export default App;
