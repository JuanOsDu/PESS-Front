import { React, Item, Fragment, useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ResponsiveAppBar from './navbar';
import Empleado from './Empleado';
import axios from 'axios';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0)
];


export default function ConsultarEmpleado() {
    const [empleados, setEmpleados] = useState([]);



    useEffect(() => {
        axios.get('http://localhost:3000/api/empleado').then(res => {
            setEmpleados(res.data);
          
        });
    }, []);


    return (
        <div>
            <ResponsiveAppBar />
            <Fragment>
                <div className='top'>
                <h1>Lista de empleados</h1>
                <div className="top-content">
                <Link to="/components/welcome">
                    <Button variant="outlined" onclick="history.back()">
                        <ArrowBackIcon />
                    </Button>
                </Link>
                </div>
                </div>
                <TableContainer component={Paper} item xs={8}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombre</TableCell>
                                <TableCell >Apellidos</TableCell>
                                <TableCell align="right">Teléfono</TableCell>
                                <TableCell align="right">Correo</TableCell>
                                <TableCell align="right">No. Identificación</TableCell>
                                <TableCell align="right">Cargo</TableCell>
                                <TableCell align="right">Departamento</TableCell>
                                <TableCell align="right">Salario mensual</TableCell>
                                <TableCell align="right">Eliminar</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {empleados.map((row) => (
                                <Empleado key={row._id} empleado={row}></Empleado>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Fragment>
            </div>
    );
}