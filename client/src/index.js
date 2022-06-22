import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import ValidationForm from "./pages/ValidationForm";
import AlertForm from "./pages/AlertForm";
import ErrorPage from "./pages/ErrorPage";
import Login from './pages/Login';

import 'bootstrap/dist/css/bootstrap.css';

export default function Website() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="ValidationForm" element={<ValidationForm />} />
        <Route path="AlertForm" element={<AlertForm />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="Login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Website />
  </React.StrictMode>
);