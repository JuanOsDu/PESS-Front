import React, {useState, useEffect} from 'react';

import axios from 'axios';
import Nomina from './Nomina';
const Nominas = ({ nominas }) => {
    const [nomina, setNomina] = useState({});
    useEffect(()=>{
        const url = 'http://localhost:3001/api/nomina/'+nominas;
        console.log(url)
        axios.get(url).then((data)=>{
            setNomina(data.data)
        })
    },[])
    return (
      <Nomina nomina={nomina}></Nomina>
    );
}
export default Nominas;
