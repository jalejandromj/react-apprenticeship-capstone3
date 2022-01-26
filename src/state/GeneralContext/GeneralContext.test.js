import React from 'react';
import { render, act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks'

import GeneralContextProvider from '../../state/GeneralContext';
import { useGeneralContext } from '../../state/GeneralContext';
import { getTodayDateYMD } from '../../utils/utils.js';

it('handles context variables correctly', async () => {
  const wrapper = ({ children }) => <GeneralContextProvider>{children}</GeneralContextProvider>
  const { result } = renderHook(() => useGeneralContext(), { wrapper })

  expect(result.current.date).toBe(getTodayDateYMD()); //Test date variable
  expect(result.current.displaySidebar).toBe(true); //Test displaySidebar variable

  // Test set variables functons...
  act(() => {
    result.current.setDate("2000-01-01");
    result.current.setDisplaySidebar(false);
  });
  expect(result.current.date).toBe("2000-01-01");
  expect(result.current.displaySidebar).toBe(false);
});