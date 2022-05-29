import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
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
            <TableCell align="right">{empleado.telefono}</TableCell>
            <TableCell align="right">{empleado.email}</TableCell>
            <TableCell align="right">{empleado.usuario_id}</TableCell>
            <TableCell align="right">{empleado.cargo}</TableCell>
            <TableCell align="right">{empleado.departamento}</TableCell>
            <TableCell align="right">{empleado.salario}</TableCell>
            <TableCell align="right"><DeleteIcon /></TableCell>
        </TableRow>


    );
}
export default Empleado;
