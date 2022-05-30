import { React, useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import ResponsiveAppBar from './navbar';
import axios from 'axios';
import Nomina from './Nomina';

import Box from '@mui/material/Box';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Nominas from './Nominas';
import Bonificaciones from './Bonificaciones'
// import Bonificaciones from './Bonificaciones';
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


export default function ConsultarNomina() {
    const [nominas, setNominas] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/api/nomina').then(res => {
            setNominas(res.data);

        });
    }, []);
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const id_empleado = params.get('_id');
    console.log(id_empleado);

    const [empleado, setEmpleado] = useState([]);
    const urlE = 'http://localhost:3001/api/empleado/' + id_empleado;
    useEffect(async() => {
        axios.get(urlE).then(res => {

            setEmpleado(res.data);



        });
    }, []);










    if (!id_empleado) {


        return (
            <div>
                <ResponsiveAppBar />
                <h1 align="center">Nomina</h1>
                <Card sx={{ minWidth: 275 }}>

                    {nominas.map((row) => (
                        <Nomina key={row._id} nomina={row}></Nomina>
                    ))}

                </Card>
                <Link to="" style={{ textDecoration: 'none' }}>
                    <p align="center">
                        <Button variant="contained" color="success" >Exportar PDF</Button>
                    </p>
                </Link>
            </div>
        );
    } else {

        return (

            <div>

                <ResponsiveAppBar />
                <h1 align="center">Nomina</h1>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Empleado
                        </Typography>
                        <Typography variant="h5" component="div">
                            {empleado.nombre} {empleado.apellidos}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {empleado.cargo}
                        </Typography>
                        <Typography variant="body2">
                            Salario mensual: {empleado.salario}
                            <br />
                            Departamento: {empleado.departamento}
                        </Typography>
                    </CardContent>

                </Card>


                <h2>Nomina del empleado</h2>
                <Nominas nominas={empleado.nominas}></Nominas>

            </div>
        );
    }

}
