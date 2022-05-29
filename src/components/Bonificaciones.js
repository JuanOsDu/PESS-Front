import React from 'react';

const Bonificaciones = ({ bonificaciones }) => {
    return (
        <p key={bonificaciones._id}>Porcentaje {bonificaciones.porcentaje}
            Tipo{bonificaciones.tipo}Descripción {bonificaciones.descripcion}</p>
    );
}
export default Bonificaciones;
