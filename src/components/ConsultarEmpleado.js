import { React, Fragment } from 'react';
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
import DeleteIcon from '@mui/icons-material/Delete';
import ResponsiveAppBar from './navbar';




function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0)
];

export default function ConsultarEmpleado() {
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
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell >{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                    <TableCell align="right"><DeleteIcon /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Fragment>
            </div>
    );
}