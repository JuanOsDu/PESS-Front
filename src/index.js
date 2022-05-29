import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './login';
import Agregarempleado from './components/agregarempleado';
import Generarnomina from './components/generarnomina';
import Welcome from './components/welcome';
import Welcome2 from './components/welcome2';
import reportWebVitals from './reportWebVitals';
import ConsultarEmpleado from './components/ConsultarEmpleado';
import ConsultarNomina from './components/ConsultarNomina';
import NavBar from './components/navbar';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/components/agregarempleado" element={<Agregarempleado />}></Route>
      <Route path="/components/generarnomina" element={<Generarnomina />}></Route>
      <Route path="/components/welcome" element={<Welcome />}></Route>
      <Route path="/components/welcome2" element={<Welcome2 />}></Route>
      <Route path="/components/ConsultarEmpleado" element={<ConsultarEmpleado />}></Route>
      <Route path="/components/ConsultarNomina" element={<ConsultarNomina />}></Route>
      <Route path="/components/navbar" element={<NavBar />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
