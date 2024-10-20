import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountry = country => {
        console.log('add this to your visited country')
        // console.log(country);
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries);
    }

    const [visitedFlags, setVisitedFlags] = useState([]);
    const handleVisitedFlags = flag => {
        console.log('add flag')
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags);
    }

    return (
        <div>
            <h3>Countries: {countries.length}</h3>

            {/* display visited country  */}
            <div>
                <h5>Visited Couontries: {visitedCountries.length} </h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3} >{country.name.common}</li>)
                    }
                </ul>
            </div>

            {/* display visited flags */}
            <h5>Visited Flags: {visitedFlags.length}</h5>
            <div className="flag-container">
                    {
                        visitedFlags.map((flag, idx ) => <img className="visited-flag" key={idx} src={flag} alt="" /> )
                    }
            </div>

            {/* display countries  */}
            <div className="country-container">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        country={country}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlags={handleVisitedFlags}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;