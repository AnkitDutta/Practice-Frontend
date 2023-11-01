import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Calculator from './Calculator/Calculator';
import GetData from './Get_starwars_characters/GetData';
import Sup from './Supabase_practice/Sup';
import Home from './BlogApp/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Calculator /> */}
    {/* <GetData /> */}
    {/* <Sup /> */}
    <Home />
  </React.StrictMode>
);
