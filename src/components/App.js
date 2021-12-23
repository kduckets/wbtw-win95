import React from 'react';
import { GlobalStyle, ThemeProvider } from '@react95/core';
import { createGlobalStyle } from 'styled-components';
import DataService from '../services/dataService';
import DataContext from '../contexts/dataContext';
import Desktop from './Desktop';
import ReactGA from 'react-ga';
import img from '../assets/interior.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ErrorPage from '../pages/404';

const dataService = new DataService();

const BodyFontSizeOverride = createGlobalStyle`
  body{
    background-image: url(${img}) !important;
    background-repeat: no-repeat;
  background-size: cover;
    font-size: 15px;
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

ReactGA.initialize('G-M4C8FHNH82');

const App = () => (
<Router>
<Switch>
   <Route exact path="/404">
     <ErrorPage />
   </Route>
   <Route exact path="/">
   <DataContext.Provider value={dataService}>
    <ThemeProvider>
      <GlobalStyle />
      <BodyFontSizeOverride />
      <Desktop />
    </ThemeProvider>
  </DataContext.Provider>
   </Route>
 </Switch>
  </Router>
);
export default App;
