import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import CrudExample from './components/CrudExample';
import 'bootstrap/dist/css/bootstrap.min.css';
import FileUploadTest from './components/FileUploadTest';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Routes>
        <Route path="/taubytepsudodocs" element={<CrudExample/>}/>
        <Route path="/imageuploadtest" element={<FileUploadTest/>}/>
        <Route path="/" element={<App/>}/>
      </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
