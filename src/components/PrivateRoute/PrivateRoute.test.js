import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import PrivateRoute from './PrivateRoute.jsx';
import AuthProvider from '../../providers/Auth';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><AuthProvider><PrivateRoute /></AuthProvider></BrowserRouter>, div);
});