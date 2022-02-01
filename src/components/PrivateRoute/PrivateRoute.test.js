import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute.component.jsx';

let RenderPrivateHtml;
let RenderPublicHtml;

beforeEach(() => {
  jest.resetModules();

  RenderPrivateHtml = () => {
    sessionStorage.setItem('Auth Token', 'testtoken');
  
    return(
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path='/' element={<div>Private component</div>}/>
          </Route>
          <Route exact path="/login" element={<div>You got redirected to login!</div>}></Route>
        </Routes>
      </BrowserRouter>
    );
  };
  
  RenderPublicHtml = () => {
    sessionStorage.removeItem('Auth Token');

    return(
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path='/' element={<div>Private component</div>}/>
          </Route>
          <Route exact path="/login" element={<div>You got redirected to login!</div>}></Route>
        </Routes>
      </BrowserRouter>
    );
  };
});

afterEach(() => {
  cleanup();
});

describe('User logged in', () => {
  it('allows to enter private component with auth token', async () => {
    await act( async () => render(<RenderPrivateHtml/>));

    const loginText = screen.getByText("Private component");

    expect(loginText).toBeInTheDocument();
  })
});

describe('Not logged in', () => {
  it('redirects to login', async () => {
    await act( async () => render(<RenderPublicHtml/>));
    const redirectText = screen.queryByText("You got redirected to login!");

    expect(redirectText).toBeInTheDocument();
  })
});