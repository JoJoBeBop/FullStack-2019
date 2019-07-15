/*
import React, {useState, useEffect} from 'react'

const filterSearch = (array, string) => {
    console.log(array);
    return array.filter(object =>
        Object.keys(object).some(objKey => object[objKey].toLowerCase().includes(string.toString().toLowerCase())));
};

const showCountry = (land) => {
    let dick = true;
    console.log("land", land)
}

const work = props => {

}

const Land = (land, props) => {

    const {OneCountry} = props;
    console.log(props);
    return (
        <div>
            <p>{land.land.name}</p>
            <button onClick={showCountry}>Show</button>
{/!*
            {dick === true ? (
                console.log("JE")
            ) : (
                console.log("NO")

            )

            }*!/}
            <hr/>
        </div>
    )
};

//Maps through names and calls land
const showNames = (countries, OneCountry) => countries.map(land => {
    console.log(OneCountry);
    return (
            <>
                <Land
                    key={land.name}
                    land={land}
                    OneCountry={OneCountry}

                />
            </>

        )
    } /!*console.log(matchPerson) ||*!/
);

export {Land, showNames, filterSearch}*/
