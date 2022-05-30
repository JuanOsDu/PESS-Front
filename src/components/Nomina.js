import { React, Item, Fragment, useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import axios from 'axios';
import Bonificaciones from './Bonificaciones';

const Nomina = ({ nomina }) => {  
  
    return (
        <CardContent
        key={nomina._id} style={{backgroundColor: "#ADDED6", margin: "40px", padding:"30px"}}
        >
            <Typography variant="h5" component="div">
        Declaración de ganancias
      </Typography>
            <Typography variant="body2">
                <p align="end">Cheque No.{nomina.numero_cheque}</p>
                <p>Fecha de inicio del pago {nomina.fecha_inicio_pago}</p>
                <p>Fin del periodo de pago {nomina.fecha_fin_pago}</p>
                <Bonificaciones bonificaciones={nomina.bonificaciones}></Bonificaciones>
                <DeleteIcon /> </Typography>
        </CardContent>
    );
}
export default Nomina;
