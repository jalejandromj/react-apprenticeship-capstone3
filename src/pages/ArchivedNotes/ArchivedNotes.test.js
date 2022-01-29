import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { renderHook } from '@testing-library/react-hooks';

import axios from 'axios';

import GeneralContextProvider from '../../state/GeneralContext';
import { useGeneralContext } from '../../state/GeneralContext';
import Home from './Home.page.jsx';
import mockResponse from '../../utils/mockApodApiResponse';

const RenderHtml = () => {
  return(
    <GeneralContextProvider>
      <Home></Home>
    </GeneralContextProvider>
  );
};

let url = '';
let body = {};

  /*jest.mock("axios", () => ({
    get: jest.fn((_url, _body) => { 
      return new Promise((resolve) => {
        url = _url
        body = _body
        resolve(true)
      })
    })
  }));*/

it('renders without crashing', async () => {
  await act( async () => render(<RenderHtml/>));
});

it('doest NOT render date input, nor error at first', async () => {
  await act( async () => render(<RenderHtml/>));//First wait for all the component to render, even async methods like api call...

  const constantHeader = screen.getByText("What mysteries may the galaxy hold for you today?");
  const errorMssg = screen.queryByText("There was an error, please try again.");
  const inputDate = screen.queryByText("Submit");

  expect(constantHeader).toBeInTheDocument();
  expect(errorMssg).toBe(null);
  expect(inputDate).toBe(null);
});

/*test('Initial search with the YT API', async () => {
  const response = mockResponse;

  axios.get.mockResolvedValue(response);

  await act( async () => render(<RenderHtml/>));

  expect(axios.get).toHaveBeenCalledTimes(1);
})*/



