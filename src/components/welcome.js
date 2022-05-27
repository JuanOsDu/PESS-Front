import { React, Fragment } from "react";
import { Button, h4, Grid, Card, Box, CardContent, Typography, CardActions } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import '../App.css';
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    </Box>
);
function Welcome() {
    return (
        <div className="Welcome">
            <Box className="card-insert" sx={{ minWidth: 250 }}>
                <Card>
                    <div className="top">
                        <h1>Bienvenido a PESS</h1>
                    </div>
                    <br></br>
                    <Grid container spacing={1} className="container-son" >
                        <Grid h4 item xs={3} >
                            <br></br>
                            <br></br>
                            <br></br>
                            <p align="center">
                                <Button variant="outlined">Consultar Empleado</Button>
                            </p>

                        </Grid>
                        <Grid h4 item xs={3}>
                            <br></br>
                            <br></br>
                            <br></br>
                            <Link to="/components/agregarempleado">
                                <p align="center">
                                    <Button variant="outlined">Agregar Empleado</Button>
                                </p>
                            </Link>
                        </Grid>
                        <Grid h4 item xs={3}>
                            <br></br>
                            <br></br>
                            <br></br>
                            <Link to="/components/generarnomina">
                            <p align="center">
                                <Button variant="outlined">Generar Nómina</Button>
                            </p>
                            </Link>
                        </Grid>
                        <Grid h4 item xs={3}>
                            <br></br>
                            <br></br>
                            <br></br>
                            <Link to="/login">
                                <p align="center">
                                    <Button variant="outlined">Cerrar Sesión</Button>
                                </p>
                            </Link>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
        </div >
    );
}
export default Welcome;

