import { React, useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import ResponsiveAppBar from './navbar';
import axios from 'axios';
import Nomina from './Nomina';
import * as qs from 'query-string';
import Bonificaciones from './Bonificaciones'
// import Bonificaciones from './Bonificaciones';


export default function ConsultarNomina() {
    const [nominas, setNominas] = useState([]);
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const id_empleado = params.get('_id');
    console.log(id_empleado);
    useEffect(() => {
        axios.get('http://localhost:3000/api/nomina').then(res => {
            setNominas(res.data);

        });
    }, []);
    const [empleado, setEmpleado] = useState([]);
    const [noms, setNoms] = useState([]);
    const [noms2, setNoms2] = useState([]);
    const urlE = 'http://localhost:3000/api/empleado/' + id_empleado;
    useEffect(() => {
        axios.get(urlE).then(res => {
            setNoms(res.data.nominas)
            setEmpleado(res.data);

            const urlN = 'http://localhost:3000/api/nomina/' + noms[0];
            axios.get(urlN).then((data) => {

                setNoms2([...noms2, data.data])

            })

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
                <p>DAtos empleado</p>
                {JSON.stringify(empleado)}
                <p>nomina del empleado</p>
                {
                    JSON.stringify(noms2)
                }
               
            </div>
        );
    }

}
