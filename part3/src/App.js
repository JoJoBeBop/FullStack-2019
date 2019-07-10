import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {filterSearch, showNames} from "./Components";

const App = () => {

    const [countries, setCountries] = useState([]);
    const [matchCountry, steMatchCountry] = useState("");
    const [newSearch, setNewSearch] = useState(false);


    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data)
            })
    }, []);


    const handleFilter = (event) => {
        const newArray = filterSearch(countries, event.target.value);
        console.log(newArray);

        if (filterSearch(countries, event.target.value).length === 0) {
            return (
                steMatchCountry(newArray)
            )

        } else {
            setNewSearch(true);
            steMatchCountry(newArray);

        }
    };


    const handlePersonSearch = (event) => {
        if (event.target.value === "") {
            setNewSearch(false)
        } else
            setNewSearch(true);


        const searchedCountries = countries.filter(country => (
            country.name.toLowerCase().includes(event.target.value.toLowerCase())
        ));
        steMatchCountry(searchedCountries);
        console.log("Country search ", matchCountry.length)

    };

    const Country = () => {
        return (
            <div>
                {showNames(matchCountry)}
            </div>
        )
    };

    const OneCountry = (matchCountry) => {
        const selected = matchCountry.country[0];
        console.log(selected.alpha3Code);

        const list = selected.languages.map((sel) => console.log(sel) ||
            <li>{sel.name}</li>
        );

        const alphaCode = selected.alpha3Code.toLowerCase();
        const imageLink = "https://restcountries.eu/data/" + alphaCode + ".svg"

        return (
            <div>
                <h2>{selected.name}</h2>
                <p>Capital: {selected.capital}</p>
                <p> Population: {selected.population}</p>

                <h3>Languages</h3>
                <ul>
                    {list}
                </ul>

                <img src={imageLink} height="100" width="100"/>

            </div>
        )
    };

    const check = () => {
        if (matchCountry.length >= 10 || newSearch === false) {
            console.log("NO length", matchCountry.length);

            return (
                <p>NO</p>
            )
        } else if (matchCountry.length === 1 && newSearch === true) {
            return (
                <OneCountry country={matchCountry}/>
            )
        } else {
            console.log("YES length", matchCountry.length);

            return (
                <Country/>
            )
        }
        /*
                showNames(matchCountry)
        */


    };


    return (
        <div>
            <h2>Check Out These Countries</h2>
            <input onChange={handlePersonSearch}/>

            {check()}
            {/*
            { newSearch === false ? (

                <Country></Country>
            ) : (
                showNames(matchCountry)
            )}*/}

        </div>


    )

};


export default App;
