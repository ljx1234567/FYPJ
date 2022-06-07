import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Jiaxin from "./pages/JiaxinPage";
import Nigel from "./pages/NigelPage";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import CallingAPI2 from './pages/CallingAPI2';
import CallingAPI3 from './pages/CallingAPI3';

import 'bootstrap/dist/css/bootstrap.css';
export default function Website() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Jiaxin" element={<Jiaxin />} />
        <Route path="Nigel" element={<Nigel />} />
        <Route path="CallingAPI2" element={<CallingAPI2 />} />
        <Route path="CallingAPI3" element={<CallingAPI3 />} />
        <Route path="*" element={<NoPage />} />
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
