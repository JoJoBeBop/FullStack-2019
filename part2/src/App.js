import React, {useState, useEffect} from 'react'
import {showNames, filterSearch} from "./Components"
import ReactDOM from "react-dom";
import axios from 'axios'
import requestFunction from "./Requests"

const App = () => {

    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [matchPerson, setMatchPerson] = useState("");
    const [newSearch, setNewSearch] = useState(false);

    useEffect(() => {
        requestFunction.getAllPersons().then(response => {
            setPersons(response);
            console.log("res ", persons)
        })
    }, [])

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

                if (per.number === event.target.value) {
                    alert(`${per.number} is already in use pal`)
                } else {
                    setNewNumber(event.target.value)
                }
            }
        );

    };


    //Adds newName to the list
    const addName = (event) => {
        event.preventDefault();
        const nameObject = {
            name: newName,
            number: newNumber
        };

        createNewPerson(nameObject);

        /*        setPersons(persons.concat(nameObject));
                setNewName("")*/


    };
    const createNewPerson = person => {
        requestFunction.createPerson(person).catch(e => {
            console.log("createNewPerson fail", e)
        })
    };

    /*Input stops working when done like this?*/
    const PersonForm = () => {
        return (
            <form onSubmit={addName}>
                <h2>Add a New Number</h2>

                <div>
                    Name:<br/>
                    <input type={"text"} value={newName}
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

    const showPersons = () => {
        return (
            newSearch === false ? (
                showNames(persons)
            ) : (
                showNames(matchPerson)
            )
        )
    }


    return (
        <div>
            <div>
                <h2>Phonebook</h2>
                Search
                <br/>
                <input onChange={handleFilter}/>
            </div>

            {/*
            <PersonForm/>
*/}
            <form onSubmit={addName}>
                <h2>Add a New Number</h2>

                <div>
                    Name:<br/>
                    <input type={"text"} value={newName}
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

            {showPersons()}

        </div>
    )

};


export default App;
