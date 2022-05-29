import { React, Fragment, useState, useEffect } from 'react';
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
                </div>
                </div>
                <TableContainer component={Paper} item xs={8}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Apellidos</TableCell>
                                <TableCell>Teléfono</TableCell>
                                <TableCell>Correo</TableCell>
                                <TableCell>No. Identificación</TableCell>
                                <TableCell>Cargo</TableCell>
                                <TableCell>Departamento</TableCell>
                                <TableCell>Salario mensual</TableCell>
                                <TableCell>Eliminar</TableCell>
                                <TableCell>Consultar nomina</TableCell>
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