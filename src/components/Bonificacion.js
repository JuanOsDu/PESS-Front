import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Bonificacion = ({ bonificacion }) => {
    const [boni, setBoni] = useState({});
    useEffect(() => {
        const url = `http://localhost:3001/api/bonificaciones/${bonificacion}`;
        console.log(url)
        axios.get(url).then((data) => {

            setBoni(data.data);
        })
    }, []);

    return (

        <div>
            <h3>Tipo {boni.tipo == 1 ? "Bonificacion" : "Deduccion"} numero {boni.codigo}:</h3>
            <span>  <p>- Porcentaje {boni.porcentaje}</p>    <p>- Descripción {boni.descripcion}</p>  </span>


        </div>

    );
}
export default Bonificacion;
