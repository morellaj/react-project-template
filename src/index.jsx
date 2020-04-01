// Package dependencies
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { normalize } from 'styled-normalize';
import { IconContext } from 'react-icons';
import theme from './theme';

// File dependencies
import rootReducer from './redux/reducers';
const HomePage = lazy(() => import('./components/HomePage'));


const store = createStore(rootReducer);

const GlobalStyle = createGlobalStyle`
 ${normalize}

 html {
  background-color: #EEECEF;
 }

 body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
  position: relative;
  font-size: 20px;
 }

 a {
   border-radius: 5px;
   color: inherit;
   text-decoration: none;
   padding: 5px;
   cursor: pointer;
 }

 h1 {
   font-size: inherit;
   margin: 0;
   font-weight: inherit;
 }

 h2 {
   font-size: inherit;
   font-weight: inherit;
   margin: 0;
 }

 p {
   margin: 0;
 }

 svg {
  margin: 0 3px;
 }

 ul {
   list-style-type: none;
   padding: 0;
   margin: 0;
 }
`;

ReactDOM.render((
  <ThemeProvider theme={theme}>
    <Suspense fallback={<div />}>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyle />
          <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
            <Switch>
              <Route exact path="/" component={HomePage} />
            </Switch>
          </IconContext.Provider>
        </BrowserRouter>
      </Provider>
    </Suspense>
  </ThemeProvider>
), document.getElementById('app'));
