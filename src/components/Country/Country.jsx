import { useState } from 'react';
import './Country.css'
const Country = ({ country }) => {
    console.log(country)
    const { name, flags, population, language, maps, cca3 } = country;

const [visited, setVisited] = useState(false);
const handleVisited = () =>{
    setVisited(!visited);
    // console.log("hello")
}
    return (
        <div className={`country ${visited && 'visited'}`} >
            <img src={flags.png} alt="" />
            <h3 style={{color: visited ? 'Purple' : 'black' }} >Name: {name?.common} </h3>
            <div className='objects'>
                <p>Population: {population}</p>
                <p>Language: {language} </p>
                <a href={maps.googleMaps}>Map</a>
                <p><small>Code:{cca3}</small></p>
            </div>
            <button onClick={handleVisited} >{visited ? 'Visited' : 'Now Visited'}</button>
            {
                visited ? ' I have visited this country' : ' I want to visited'
            }
        </div>
    );
};

export default Country;