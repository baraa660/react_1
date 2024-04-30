import './App.css';
import React from 'react';
import { DataProvider } from './DataContext/DataContext';
import Header from './components/header/Header';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom'
import {router} from './layouts/Routes.jsx'
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';


function App() {

  return (
    <DataProvider>
        <RouterProvider router={router}/>
    </DataProvider>
  );
}

export default App;
