import { React } from "react";
import { Button, Grid, Card, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import '../App.css';
import ResponsiveAppBar from './navbar';

function Welcome() {
    return (
        <div className="Welcome">
            <ResponsiveAppBar/>
            <Box className="card-insert" sx={{ minWidth: 250 }}>
                <Card>
                    <div className="top">
                        <h1>Bienvenido a PESS</h1>
                    </div>
                    <br></br>
                    <Grid container spacing={1} className="container-son" >
                        <Grid h4 item xs={3} >
                            <br></br>
                            <Link to="/components/ConsultarEmpleado">
                            <p align="center">
                                <Button variant="outlined">Consultar Empleado</Button>
                            </p>
                            </Link>
                        </Grid>
                        <Grid h4 item xs={3}>
                            <br></br>
                            <Link to="/components/agregarempleado">
                                <p align="center">
                                    <Button variant="outlined">Agregar Empleado</Button>
                                </p>
                            </Link>
                        </Grid>
                        <Grid h4 item xs={3}>
                            <br></br>
                            <Link to="/components/generarnomina">
                            <p align="center">
                                <Button variant="outlined">Generar Nómina</Button>
                            </p>
                            </Link>
                        </Grid>
                        <Grid h4 item xs={3}>
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

