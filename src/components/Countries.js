import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import Card from './Card';


const Countries = () => {

    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(250);
    const [selectedValue, setSelectedValue] = useState("");

    //  On commence le composant cad lorsque le com[osant est monté
    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then((res) => setData(res.data));
    }, [])

    const radios = ["Africa", "Europe", "America", "Asia", "Oceania"];

    const card = data.sort((a, b) => b.population - a.population)
        .filter((country) => country.continents[0].includes(selectedValue))
        .slice(0, rangeValue)
        .map((country, index) => <Card key={index} country={country} />);

    return (
        <div className='countries'>
            <ul className="radio-container">
                <input type="range" min="1" max="250"
                    defaultValue={rangeValue}
                    onChange={(e) => setRangeValue(e.target.value)}
                />
                {
                    radios.map(
                        (continent) =>
                            <li>
                                <input type="radio" name="continent" id={continent} onChange={(e) => setSelectedValue(e.target.id)} />
                                <label htmlFor={continent}>{continent}</label>
                            </li>
                    )
                }
            </ul>
            {selectedValue && <button onClick={() => setSelectedValue("")}>Annuler la recherche</button>}
            <h1>{card.length} pays</h1>
            <br />
            <ul>
                {card}
            </ul>
        </div>
    );
};

export default Countries;