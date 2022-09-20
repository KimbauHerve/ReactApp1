import React from 'react';

const Card = ({ country}) => {
    return (
        <li className='card'>
            <img src={country.flags.svg} alt={country.translations.fra.common} />
            <div className="infos">
                <h4>{country.translations.fra.common}</h4>
                <h4>{country.capital}</h4>
                <h5>{country.population.toLocaleString() + " habitant(s)"} </h5>
            </div>
        </li>
    );
};

export default Card;