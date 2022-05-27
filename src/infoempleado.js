import { React, Fragment } from "react";
import { Button, h4, Grid, Card, Box, CardContent, Typography, CardActions } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import './App.css';
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    </Box>
);
function Infoempleado() {
    return (
        <div className="Infoempleado">
            <Box className="card-insert" sx={{ minWidth: 250 }}>
                <Card>
                    <div className="top">
                        <h1>Información del Empleado</h1>
                        <div className="top-content">
                            <Link to="/login">
                                <Button variant="outlined">
                                    <ArrowBackIcon onClick={event => console.log("hgo")}>
                                        <Link to="/login"></Link>
                                    </ArrowBackIcon>
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <br></br>
                    <Grid container spacing={1} className="container-son" >
                        <Grid h4 item xs={3} >
                            Nombre
                            <p><input placeholder="" className="border" /></p>
                            Telefono
                            <p><input placeholder="" className="border" /></p>
                            Numero de Indentificación
                            <p><input placeholder="" className="border" /></p>
                            Direccion de Domicilio
                            <p><input placeholder="" className="border" /></p>
                            Salario Mensual
                            <p><input placeholder="" className="border" /></p>
                        </Grid>
                        <Grid h4 item xs={3}>
                        </Grid>
                        <Grid h4 item xs={3}>
                            Apellido
                            <p><input placeholder="" className="border" /></p>
                            Correo Electrónico
                            <p><input placeholder="" className="border"/></p>
                            Cargo
                            <p><input placeholder="" className="border"/></p>
                            Departamento
                            <p><input placeholder="" className="border" /></p>
                            Contraseña
                            <p><input placeholder="" className="border" /></p>
                        </Grid>
                        <Grid h4 item xs={3}>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <p align="right">
                                <Button variant="outlined">Registrar Empleado</Button>
                            </p>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
        </div >
    );
}
export default Infoempleado;

