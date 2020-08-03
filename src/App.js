import React, { Suspense } from 'react';
import { HashRouter } from 'react-router-dom';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Header from './Components/Header/Header';
import './App.css';

import Routes from './Routes/Routes';
import { UserProvider } from './Contexts/User/UserContext';
import Spinner from './Components/Spinner/Spinner';

export default function App() {
  return (
    <HashRouter basename='/'>
      <UserProvider>
        <div className="container-fluid p-0">
          <Header />
          <Suspense fallback={<Spinner>Please wait</Spinner>}>
            <Routes />
          </Suspense>
        </div >
      </UserProvider>
    </HashRouter>
  )
}
