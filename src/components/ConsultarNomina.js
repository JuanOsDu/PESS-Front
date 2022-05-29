import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import ResponsiveAppBar from './navbar';


export default function BasicCard() {
    return (
        <div>
            <ResponsiveAppBar />
            <h1 align="center">Nomina</h1>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
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
                    <Typography variant="h5" component="div">
                        
                    </Typography>
                   
                    <Typography variant="body2">
                       <p align="end">Cheque No.</p>
                        well meaning and kindly.
                        <br />
                    </Typography>
                </CardContent>                
            </Card>
            <Link to="/components/generarnomina">
                <p align="center">
                    <Button variant="outlined">Exportar PDF</Button>
                </p>
            </Link>
        </div>
    );
}
