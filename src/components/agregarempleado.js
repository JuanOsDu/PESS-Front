import { React } from "react";
import { Button, Grid, Card, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import '../App.css';
import ResponsiveAppBar from "./navbar";

function Agregarempleado() {
    return (
        <div className="Agregarempleado">
            <ResponsiveAppBar />
            <Box className="card-insert" sx={{ minWidth: 250 }}>
                <Card>
                    <div className="top">
                        <h1>Información del Empleado</h1>
                        <div className="top-content">
                            <Link to="/components/welcome">
                                <Button variant="outlined">
                                    <ArrowBackIcon />
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <br></br>
                    <Grid container spacing={1} className="container-son" >
                        <Grid h4 item xs={3} >
                            Nombres
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
                            Apellidos
                            <p><input placeholder="" className="border" /></p>
                            Correo Electrónico
                            <p><input placeholder="" className="border" /></p>
                            Cargo
                            <p><input placeholder="" className="border" /></p>
                            Departamento
                            <p><input placeholder="" className="border" /></p>
                            Contraseña
                            <p><input placeholder="" className="border" /></p>
                        </Grid>
                        <Grid h4 item xs={3}>
                            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
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
export default Agregarempleado;

