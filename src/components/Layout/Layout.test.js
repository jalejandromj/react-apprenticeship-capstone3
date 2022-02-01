import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks'
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GeneralContextProvider from '../../state/GeneralContext';
import { useGeneralContext } from '../../state/GeneralContext';
import Layout from './Layout.jsx';

const RenderHtml = () => {
  return(
    <BrowserRouter>
      <GeneralContextProvider>
        <Layout><div>Test children</div></Layout>
      </GeneralContextProvider>
    </BrowserRouter>
  );
}

it('renders without crashing', () => {
  render(
    <RenderHtml/>
  );
});

it("renders children", () => {
  render(
    <RenderHtml/>
  );
  
  const child = screen.getByText(/Test children/i);
  expect(child).toBeInTheDocument();
});

it('displays sidebar', async () => {
  const wrapper = ({ children, displaySidebar }) => <GeneralContextProvider displaySidebar={renderHook}>{children}</GeneralContextProvider>
  const { result, rerender } = renderHook(() => useGeneralContext(), { wrapper, initialProps: {displaySidebar: true} })

  render(
    <RenderHtml/>
  );

  const sidebarBtn = screen.getByText(/My notes/i);

  expect(sidebarBtn).toBeInTheDocument(); //Initially, displaySidebar is set to TRUE
});