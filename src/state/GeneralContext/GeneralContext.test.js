import React from 'react';
import { render, act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks'

import GeneralContextProvider from '../../state/GeneralContext';
import { useGeneralContext } from '../../state/GeneralContext';

it('handles context variables correctly', async () => {
  const wrapper = ({ children }) => <GeneralContextProvider>{children}</GeneralContextProvider>
  const { result } = renderHook(() => useGeneralContext(), { wrapper })

  expect(result.current.displaySidebar).toBe(true); //Test displaySidebar variable

  // Test set variables functons...
  act(() => {
    result.current.setDisplaySidebar(false);
  });
  expect(result.current.displaySidebar).toBe(false);
});