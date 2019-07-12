import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = props => {


    const renderWeatherDetails = () => {
        const { temp_c, wind_kph, wind_dir } = weathers
        console.log(temp_c)

        return (
            <React.Fragment>
                <p>
                    <strong>temperature:</strong> {temp_c} Celsius
                </p>
                <p>
                    <strong>wind:</strong> {wind_kph} kph direction {wind_dir}
                </p>
            </React.Fragment>
        )

    }

    const renderLoading = () => <h3>Loading...</h3>

    return (
        <div>
            {Object.keys(weathers).length === 0
                ? renderLoading()
                : renderWeatherDetails()}
        </div>
    )
};

export default Weather