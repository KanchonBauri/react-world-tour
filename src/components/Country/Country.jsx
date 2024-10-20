import { useState } from 'react';
import './Country.css'
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    // console.log(country)
    const { name, flags, population, language, maps, cca3 } = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
        // console.log("hello")
    }

    // system 1
    // const passWithParams = () =>{
    //     handleVisitedCountry(country)
    // }

    // system 2
    // const passWithParams = () => handleVisitedCountry(country)

    return (
        <div className={`country ${visited && 'visited'}`} >
            <img className='flag' src={flags.png} alt="" />
            <h3 style={{ color: visited ? 'Purple' : 'black' }} >Name: {name?.common} </h3>
            <div className='objects'>
                <p>Population: {population}</p>
                <p>Language: {language} </p>
                <a href={maps.googleMaps}>Map</a>
                <p><small>Code:{cca3}</small></p>
            </div>

            {/* system 1 */}
            {/* <button style={{ margin: 5 }} onClick={passWithParams} >Mark visited</button> */}
            {/* system 2 */}
            <button style={{ margin: 5 }} onClick={() => handleVisitedCountry(country)} >Mark visited</button>
            {/* system 3 */}
            {/* <button style={{ margin: 5 }} onClick={handleVisitedCountry} >Mark visited</button> */}
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)} >Add Flag</button>
            <br />
            <button onClick={handleVisited} >{visited ? 'Visited' : 'Now Visited'}</button>
            {
                visited ? ' I have visited this country' : ' I want to visited'
            }
        </div>
    );
};

export default Country;