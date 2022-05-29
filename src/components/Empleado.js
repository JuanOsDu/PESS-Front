import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import FileOpenIcon from '@mui/icons-material/FileOpen';
const Empleado = ({ empleado }) => {
    return (
        <TableRow
            key={empleado._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {empleado.nombre}
            </TableCell>
            <TableCell >{empleado.apellidos}</TableCell>
            <TableCell >{empleado.telefono}</TableCell>
            <TableCell >{empleado.email}</TableCell>
            <TableCell >{empleado.usuario_id}</TableCell>
            <TableCell >{empleado.cargo}</TableCell>
            <TableCell >{empleado.departamento}</TableCell>
            <TableCell >{empleado.salario}</TableCell>
            <TableCell align="center"><DeleteIcon /></TableCell>
            <TableCell align="center"><FileOpenIcon /></TableCell>
        </TableRow>


    );
}
export default Empleado;
