
import './App.css';
import { React, Item, Fragment, useState } from 'react';
import { Grid, Input, TextField, Button } from '@mui/material'
import { Link } from 'react-router-dom';
import im from './media/logito.png'
import axios from 'axios';
function Login() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
  
    var { uname, pass } = document.forms[0];
    console.log({
      correo: uname.value,
      contraseña: pass.value
    })
    axios.post('http://localhost:3000/api/login', {
      correo: uname.value,
      contraseña: pass.value
    }).then(function (response) {
      console.log(response);
    })
      .catch(function (error) {
        console.log(error);
      });
    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (



    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <TextField placeholder="Correo electronico o usuario" className="gridInputSon" name="uname" required />

          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <TextField placeholder="Contraseña" type="password" className="gridInputSon" name="pass" required></TextField>

          {renderErrorMessage("pass")}
        </div>

        <div className="button-container">

          <input type="submit" />
        </div>
      </form>
    </div>
  );
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
                <h1>Login PESS</h1>
              </div>
              <img src={im} style={{ width: "200px" }}></img>
            </div>
            <div className="login-form">
              <div className="title">Sign In</div>
              {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
            </div>
            <div>
              <Link to="/components/welcome">
                <Button variant="outlined">Ingresar</Button>
              </Link>
            </div>
            <nav>
              <Link to="https://www.facebook.com/">Ir Facebook</Link>
            </nav>
          </Grid>
        </Grid>
      </Fragment>
    </div>
  );
}
export default Login;
