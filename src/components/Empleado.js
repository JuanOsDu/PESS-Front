import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import axios from 'axios';
const handleDelete = (_id)=>{
 
    const url = 'http://localhost:3001/api/empleado/'+_id;
    axios.delete(url).then((data)=>{
        console.log("Deleted: ", data)
    })
}
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
            <TableCell align="center">   <Button onClick={()=>handleDelete(empleado._id)}><DeleteIcon /> </Button>    </TableCell>

            <TableCell align="center"><Link to={{
                pathname: "/components/ConsultarNomina",
                search: "?_id="+empleado._id
            }} ><Button ><FileOpenIcon /></Button></Link></TableCell>
        </TableRow>


    );
}
export default Empleado;
