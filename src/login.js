
import './App.css';
import { React, Item, Fragment } from 'react';
import { Grid, Input, TextField, Button } from '@mui/material'
import { Link } from 'react-router-dom';
import im from './media/logito.png'
function Login() {
  return (
    <div className="App">
      <Fragment >

        <Grid container spacing={2} >
          <Grid item xs={8} className='img'>
            <div class="fill">
              <img src="http://acexauditores.com/wp-content/uploads/2015/04/Consultor%C3%ADa-y-Contabilidad.png" alt="" />
            </div>
          </Grid>


          <Grid item xs={4} className="gridInput" >
            <div >
              <div>
                <h1>Login</h1>
                <nav>
                  <Link to="https://www.facebook.com/">Ir Facebook</Link>
                </nav>
              </div>
              <img src={im} style={{ width: "200px" }}></img>

            </div>
            <div>
              <TextField placeholder="Correo electronico o usuario" className="gridInputSon" />

            </div>
            <div>
              <TextField placeholder="Contraseña" type="password" className="gridInputSon"></TextField>

            </div>
            <div>
              <Button variant="outlined">Ingresar</Button>

            </div>


          </Grid>




        </Grid>






      </Fragment>
    </div>
  );
}

export default Login;
