import React from "react";
import {useState} from "react";

function Countries(){

    const [data, setData] = useState("Herve");

    const Bye=()=>{
        setData("Bye bye");
    }

    return <div className="countries">
        countries de {data}
        <p><button onClick={Bye}>Cliquez</button></p>
    </div>;
}

export default Countries;