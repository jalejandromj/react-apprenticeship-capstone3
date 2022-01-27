import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { app } from '../../utils/firebase-config';

import GeneralContextProvider from '../../state/GeneralContext';
import Layout from '../Layout';
import AuthPage from '../../pages/AuthPage';

function App() {
  return (
    <BrowserRouter>
      <GeneralContextProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<div>App</div>}></Route>
          </Routes>
          <Routes>
            <Route exact path="/register" element={<AuthPage action={"register"}/>}></Route>
          </Routes>
          <Routes>
            <Route exact path="/login" element={<AuthPage action={"login"}/>}></Route>
          </Routes>
          <Routes>
            <Route exact path="/notes" element={<div>Notes</div>}></Route>
          </Routes>
        </Layout >
      </GeneralContextProvider>
    </BrowserRouter>
  );
}

export default App;
