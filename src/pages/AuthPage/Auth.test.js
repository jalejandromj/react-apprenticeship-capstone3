import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import { app } from '../../utils/firebase-config';
import AuthPage from './Auth.page.jsx';

let RenderHtml;

beforeEach(() => {
  jest.resetModules();

  RenderHtml = () => {
    return(
      <BrowserRouter>
        <AuthPage />
      </BrowserRouter>
    );
  };
});

afterEach(() => {
  cleanup();
});

it('renders without crashing', async () => {
  await act( async () => render(<RenderHtml/>));
});

it('renders basic initial login elements', async () => {
  await act( async () => render(<RenderHtml/>));

  const loginHeader = screen.getByText("Login");
  const inputs = screen.queryAllByRole("textbox");
  const submitBtn = screen.getByText("Submit");
  const switchActionsBtn = screen.getByText("Do not have an account? Register! For free...");
  
  expect(submitBtn).toBeInTheDocument();
  expect(switchActionsBtn).toBeInTheDocument();
  expect(loginHeader).toBeInTheDocument();
  expect(inputs.length).toBe(1);
});

it('write in input and submit', async () => {
  await act( async () => render(<RenderHtml/>));

  const form = screen.getByTestId('auth-form');
  const submitBtn = screen.getByText("Submit");
  const emailInput = screen.getByLabelText('Email', {selector: 'input'});
  const passwordInput = screen.getByLabelText('Password', {selector: 'input'});
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();

  fireEvent.change(emailInput, { target: { value: "test@wizeline.com" } });
  fireEvent.change(passwordInput, { target: { value: "test" } });
  expect(emailInput.value).toBe("test@wizeline.com");
  //Not quite sure how to mock the submit of the form data. Currently I make the click on the submit button and get erro of 
  //reading the values of the form data... 
  /*form.dispatchEvent(new Event('submit'), {
    preventDefault: () => {},
    target: {
      elements: {
        emailInput: { value: 'blah' },
        passwordInput: { value: 'some value' }
      }
   }});*/

   fireEvent.click(submitBtn);
   //expect(screen.getByText("Email or password is not correct.")).toBeInTheDocument();
});



