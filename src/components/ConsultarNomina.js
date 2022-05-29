import { React, useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import ResponsiveAppBar from './navbar';
import axios from 'axios';
import Nomina from './Nomina';
// import Bonificaciones from './Bonificaciones';


export default function ConsultarNomina() {
    const [nominas, setNominas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/nomina').then(res => {
            setNominas(res.data);

        });
    }, []);
    
    return (
        <div>
            <ResponsiveAppBar />
            <h1 align="center">Nomina</h1>
            <Card sx={{ minWidth: 275 }}>
                <CardHeader>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        <p>
                            Nombre de la empresa
                        </p>
                        <p>
                            Dirección de la empresa
                        </p>
                        <p>
                            Ciudad
                        </p>
                        <p>
                            País
                        </p>
                    </Typography>
                </CardHeader>
                {nominas.map((row) => (
                    <Nomina key={row._id} nomina={row}></Nomina>
                ))}
                
            </Card>
            <Link to="" style={{ textDecoration: 'none'}}>
                <p align="center">
                    <Button variant="contained" color="success" >Exportar PDF</Button>
                </p>
            </Link>
        </div>
    );
}
