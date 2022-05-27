import { React, Fragment } from "react";
import { Button, h4, Grid, Card, Box, CardContent, Typography, CardActions } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './App.css';
const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);
function Home() {
    return (
        <div className="Home">
            <Box className="card-insert" sx={{ minWidth: 250 }}>

                <Card>
                    <div className="top">

                        <h1>Asignacion de Citas</h1>
                        <div className="top-content">
                            <Link to="/login">
                                <Button>
                                    <Delete onClick={event => console.log("hgo")}>
                                        <Link to="/login"></Link>
                                    </Delete>
                                </Button>
                            </Link>
                            <h4>Cita No.
                                <p>Fecha</p>
                            </h4>
                        </div>
                    </div>
                    <span>
                        <h4>En esta sección podrá agendar una nueva</h4>
                    </span>
                    <Grid container spacing={1} className="container-son" >
                        <Grid h4 item xs={3} >
                            <h4>Nombre</h4>
                            <h4>Medico</h4>
                            <h4>Direccion</h4>
                            <h4>Direccion</h4>
                            <h4>Hora de cira</h4>
                        </Grid>
                        <Grid h4 item xs={3}>
                            <h4>CC</h4>
                        </Grid>
                        <Grid h4 item xs={3}>
                            <h4>Correo</h4>
                            <h4>Consultorio</h4>
                            <h4>Fecha de la cita</h4>
                        </Grid>
                        <Grid h4 item xs={3}>
                            <h4>Telefono</h4>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
        </div >
    );
}
export default Home;

