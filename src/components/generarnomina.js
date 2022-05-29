import * as React from 'react';
import { Button, Grid, Card, Box} from '@mui/material';
import '../App.css';
import { StyledEngineProvider } from '@mui/material/styles';
import Date from '../date.js';
import Selector from '../selector.js';
import ResponsiveAppBar from './navbar';
import { Link } from 'react-router-dom';


function Generarnomina() {
    return (
        <div className="Generarnomina">
            <ResponsiveAppBar/>
            <Box className="card-insert" sx={{ minWidth: 250 }}>
                <Card>
                    <div className="top">
                        <h1>Información de los Ingresos</h1>
                        <div className="top-content">
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
                            <Link to="" style={{ textDecoration: 'none'}}>
                            <p align="right">
                                <Button variant="contained" color="success">Crear Recibo de Nómina</Button>
                            </p>
                            </Link>
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

