import React from 'react';
import Bonificacion from './Bonificacion';
const Bonificaciones = ({ bonificaciones }) => {
    return (
        bonificaciones.map((bonificacion)=>{
           return <Bonificacion key={bonificacion} bonificacion={bonificacion}></Bonificacion>
        })
    );
}
export default Bonificaciones;
