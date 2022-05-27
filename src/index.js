import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './login';
import Infoempleado from './infoempleado';
import Home2 from './home2';
import reportWebVitals from './reportWebVitals';

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
      <Route path="/infoempleado" element={<Infoempleado />}></Route>
      <Route path="/home2" element={<Home2 />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
