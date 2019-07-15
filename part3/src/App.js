import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Weather from './ComponentFiles/Weather'

const App = () => {

    const [countries, setCountries] = useState([]);
    const [matchCountry, steMatchCountry] = useState("");
    const [newSearch, setNewSearch] = useState(false);
    const [stateCountry, setStateCountry] = useState(false);
    const [weathers, setWeathers] = useState({});
    const [isClicked, setIsClicked] = useState(null);


    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data)
            })
    }, []);


    useEffect(() => {
        const apiLink = "http://api.apixu.com/v1/current.json?key=2cf5099182054a69984111605191107&q=";
        axios
            .get('http://api.apixu.com/v1/current.json?key=2cf5099182054a69984111605191107&q=', {
                params: {
                    q: "Paris"
                }
            }).then(response => {
            setWeathers(response.data.current)
        })
    }, []);
    console.log(weathers);


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

    /*Uses CSS to hide search results when "Show" button is clicked and returns single country information*/
    const check = () => {
        if (matchCountry.length >= 10 || newSearch === false) {
            return (
                <h4>Please Be More Specific</h4>
            )
        } else if (matchCountry.length === 1 && newSearch === true) {
            return (
                <OneCountry country={matchCountry}/>
            )
        } else if (isClicked === null) {
            return (
                <>
                    <Country/>
                </>
            )
        }
    };

    const Country = () => {
        return (
            <>
                {showNames(matchCountry)}
            </>
        )
    };

    const OneCountry = (matchCountry) => {

        /*Should have been it's own component*/
        const selected = matchCountry.country[0];
        console.log(selected);
        const languagesList = selected.languages.map((sel) => console.log(sel) ||
            <li key={sel.name}>{sel.name}</li>
        );

        const alphaCode = selected.alpha3Code.toLowerCase();
        const imageLink = "https://restcountries.eu/data/" + alphaCode + ".svg";

        setIsClicked(null);
        return (
            <div>
                <h2>{selected.name}</h2>
                <p>Capital: {selected.capital}</p>
                <p> Population: {selected.population}</p>

                <h3>Languages</h3>
                <ul>
                    {languagesList}
                </ul>

                <img alt={"Flag"} src={imageLink} height="100" width="100"/>

                <Weather weathers={weathers}/>
            </div>
        )
    };

    const Land = (land) => {
        return (
            <div>
                <p>{land.land.name}</p>
                <button onClick={() => showCountry(land)}>Show</button>
                <hr/>
            </div>
        )
    };

//Maps through names and calls land
    const showNames = (countries) => countries.map(land => {
            return (
                <>
                    <Land
                        key={land.name}
                        land={land}
                    />
                </>
            )
        }
    );

    /*Not well made at all. I was behind schedule so this was a quick workaround. As well as not using ./Component*/
    /*Uses CSS to hide search results when "Show" button is clicked and returns single country information*/
    const ClickCountry = ({message}) => {
        if (message === null) {
            return null
        } else {
            console.log(message.land);
            const selected = message.land;
            const languagesList = selected.languages.map((sel) => console.log(sel) ||
                <li key={sel.name}>{sel.name}</li>
            );
            const alphaCode = selected.alpha3Code.toLowerCase();
            const imageLink = "https://restcountries.eu/data/" + alphaCode + ".svg";

            return (
                <div>
                    <h2>{selected.name}</h2>
                    <p>Capital: {selected.capital}</p>
                    <p> Population: {selected.population}</p>

                    <h3>Languages</h3>
                    <ul>
                        {languagesList}
                    </ul>

                    <img alt={"Flag"} src={imageLink} height="100" width="100"/>

                    <Weather weathers={weathers}/>
                </div>
            )
        }
    };

    /*OneCountry has setIsClicked=(null)*/
    const showCountry = (land) => {
        setIsClicked(land)
    };

    return (
        <div>
            <h2>Check Out These Countries</h2>
            <input onChange={handlePersonSearch}/>
            {check()}
            <ClickCountry message={isClicked}/>
        </div>
    )
};


export default App;
