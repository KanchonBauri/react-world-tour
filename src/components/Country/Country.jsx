import './Country.css'
const Country = ({ country }) => {
    console.log(country)
    const { name, flags, population, language, maps, cca3 } = country;
    return (
        <div className="country" >
            <img src={flags.png} alt="" />
            <h3>Name: {name?.common} </h3>
            <div className='objects'>
                <p>Population: {population}</p>
                <p>Language: {language} </p>
                <a href={maps.googleMaps}>Map</a>
                <p><small>Code:{cca3}</small></p>
            </div>
            <button>Visited</button>
        </div>
    );
};

export default Country;