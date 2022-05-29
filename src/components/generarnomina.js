import * as React from 'react';
import { Button, Grid, Card, Box} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import '../App.css';
import { StyledEngineProvider } from '@mui/material/styles';
import Date from '../date.js';
import Selector from '../selector.js';
import ResponsiveAppBar from './navbar';


function Generarnomina() {
    return (
        <div className="Generarnomina">
            <ResponsiveAppBar/>
            <Box className="card-insert" sx={{ minWidth: 250 }}>
                <Card>
                    <div className="top">
                        <h1>Información de los Ingresos</h1>
                        <div className="top-content">
                            <Link to="/components/welcome">
                                <Button variant="outlined" onclick="history.back()">
                                    <ArrowBackIcon/>
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <br></br>
                    <Grid container spacing={1} className="container-son" >
                        <Grid h4 item xs={3} >
                            Fecha de pago
                            <StyledEngineProvider injectFirst>
                                <Date />
                            </StyledEngineProvider>
                            <br></br><br></br>
                            Numero del cheque
                            <p><input placeholder="" className="border" /></p>

                        </Grid>
                        <Grid h4 item xs={3}>
                        </Grid>
                        <Grid h4 item xs={3}>
                            Fin de periodo de pago
                            <StyledEngineProvider injectFirst>
                                <Date />
                            </StyledEngineProvider>
                        </Grid>
                        <Grid h4 item xs={3}>
                            <br></br><br></br><br></br>
                            <p align="right">
                                <Button variant="outlined">Crear Recibo de Nómina</Button>
                            </p>
                        </Grid>
                    </Grid>


                    <Grid container spacing={1} className="container-son" >
                        <Grid h4 item xs={3} >
                            <h3>Deducciones</h3>
                            Tipo de deducción
                            <React.StrictMode>
                                <StyledEngineProvider injectFirst>
                                    <Selector />
                                </StyledEngineProvider>
                            </React.StrictMode>

                            <h3>Bonificaciones</h3>
                            Tipo de bonificacion
                            <React.StrictMode>
                                <StyledEngineProvider injectFirst>
                                    <Selector />
                                </StyledEngineProvider>
                            </React.StrictMode>

                        </Grid>
                        <Grid h4 item xs={3}>
                        </Grid>
                        <Grid h4 item xs={3}>
                            <h3>ㅤㅤ</h3>
                            Monto
                            <p><input placeholder="" className="border" /></p>

                            <h2>ㅤㅤ</h2>
                            Monto
                            <p><input placeholder="" className="border" /></p>
                        </Grid>

                    </Grid>
                </Card>
            </Box>
        </div >
    );
}
export default Generarnomina;

