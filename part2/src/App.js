import React, {useState, useEffect} from 'react'
import {showNames, filterSearch} from "./Components"
import ReactDOM from "react-dom";
import axios from 'axios'
import requestFunction from "./Requests"
import "./index.css"

const App = () => {

    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [matchPerson, setMatchPerson] = useState("");
    const [newSearch, setNewSearch] = useState(false);
    const [isTaken, setIsTaken] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);


    useEffect(() => {
        requestFunction.getAllPersons().then(response => {
            setPersons(response);
            console.log("res ", persons)
        })
    }, []);

    const newTimeOut = () => {
        setTimeout(() => {
            setErrorMessage(null)
        }, 3000)
    };

    const Notification = ({ message }) => {
        if (message === null) {
            return null
        } else {
            newTimeOut();
            return (
                <div className="error">
                    {message}
                </div>
            )}
    };

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
            console.log(newSearch);
            setMatchPerson(newArray);

        }
    };

    //setNewName
    const handleNewName = (event) => {
        setNewName(event.target.value)
    };

    //setNewNumber
    const handleNewNumber = (event) => {
        setNewNumber(event.target.value)

    };

    /*    const addNameHook = (event) => {

            console.log("first", isTaken);

            event.preventDefault();
            const nameObject = {
                name: newName,
                number: newNumber
            };

            const checkHook = () => {
                const dicks = (bool) => {
                    setIsTaken(bool);


                }
                console.log("check");
                persons.map((per) => {
                    console.log(nameObject.name);
                    if (per.name === nameObject.name) {
                        dicks(true)
                        console.log("second", isTaken);
                        alert(`${per.name} is already in use pal`)

                    }
                });

                if (isTaken === false) {
                    console.log("first 1", isTaken);
                    createNewPerson(nameObject);
                }

            }
            checkHook(event)
            return [isTaken, ]

        };*/


    //Adds newName to the list
    const addName = (event) => {
        event.preventDefault();

        const nameObject = {
            name: newName,
            number: newNumber
        };

        let loopedNames = persons.map((per) => per.name);
        const nameFiltered = persons.filter(per => { return per.name === nameObject.name})[0];
        console.log(nameFiltered);

        if (loopedNames.includes(nameObject.name)) {
            if (window.confirm(`${nameObject.name} is already in use pal. Do you want to update the number?`)) {
                requestFunction.updatePerson(nameFiltered.id, nameObject).
                catch(e => {
                    console.log("Update name failed", e);
                    setErrorMessage(`Name ${nameObject.name} has been deleted from the server!`)

                });
                setErrorMessage(`Name ${nameObject.name} has been updated!`
                );
            }
        }

        else {
            requestFunction.createPerson(nameObject)
                .catch(e => {
                    console.log("createNewPerson fail", e)
                });
            setErrorMessage(`Name ${nameObject.name} added`
            );
        }

    };


    const createNewPerson = person => {
        requestFunction.createPerson(person)
            .catch(e => {
                console.log("createNewPerson fail", e)
            })
    };



    /*Input stops working when done like this?*/
    /*    const PersonForm = () => {
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
        };*/

    const showPersons = () => {
        return (
            newSearch === false ? (
                showNames(persons)
            ) : (
                showNames(matchPerson)
            )
        )
    };

    const deleteButton = () => {
        setErrorMessage(`Name  Deleted`)

    };


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
                    <Notification message={errorMessage} />

                </div>
            </form>
            <h2>Numbers</h2>

            {showPersons()}

        </div>
    )

};


export default App;
