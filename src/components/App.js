import React from 'react';
import { createGlobalStyle } from 'styled-components';
import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';
import '@react95/icons/icons.css'
import DataService from '../services/dataService';
import img from '../assets/interior.jpg';
import DataContext from '../contexts/dataContext';
import Desktop from './Desktop';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import ErrorPage from '../pages/404';

const BodyFontSizeOverride = createGlobalStyle`
  body{
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: auto 100%; 
    height: 100vh;

    font-size: 15px !important;
    -webkit-touch-callout:none;
    -webkit-user-select:none;
    -khtml-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
  }
  button{
    color: black !important;
  }
`;

const dataService = new DataService();

const App = () => (
  <Router>
    <Routes>
      <Route path="/404" element={<ErrorPage />} />
      <Route path="/-" element={
        <DataContext.Provider value={dataService}>
          <Desktop />
          <BodyFontSizeOverride />
        </DataContext.Provider>
      } />
      <Route path="/" element={
        <DataContext.Provider value={dataService}>
          <Desktop />
          <BodyFontSizeOverride />
        </DataContext.Provider>
      } />
    </Routes>
  </Router>
);

export default App;