import './Country.css'
const Country = ({country}) => {
    console.log(country)
    const {name, flags, population, language, maps} = country;
    return (
        <div className="country" >
            <h3>Name: {name?.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Language: {language} </p>
            <a href={maps.googleMaps}>Map</a>
        </div>
    );
};

export default Country;