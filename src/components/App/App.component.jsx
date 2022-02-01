import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';

import { app } from '../../utils/firebase-config';

import GeneralContextProvider from '../../state/GeneralContext';
import Layout from '../Layout';
import AuthPage from '../../pages/AuthPage';
import NotesPage from '../../pages/Notes';
import ArchivedNotesPage from '../../pages/ArchivedNotes';
import PrivateRoute from '../../components/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <GeneralContextProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Navigate to="/notes" />}></Route>
            <Route exact path="/register" element={<AuthPage action={"register"}/>}></Route>
            <Route exact path="/login" element={<AuthPage action={"login"}/>}></Route>
            <Route exact path='/notes' element={<PrivateRoute/>}>
                <Route exact path='/notes' element={<NotesPage />}/>
            </Route>
            <Route exact path='/notes/archived' element={<PrivateRoute/>}>
                <Route exact path='/notes/archived' element={<ArchivedNotesPage />}/>
            </Route>
          </Routes>
        </Layout >
      </GeneralContextProvider>
    </BrowserRouter>
  );
}

export default App;
