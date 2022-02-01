import { render, screen } from '@testing-library/react';
import CenteredPanel from './CenteredPanel.component';

it('renders Col without crashing', () => {
  render(
    <CenteredPanel/>
  );
});

it('renders children without crashing', () => {
  render(
    <CenteredPanel><div>Test children</div></CenteredPanel>
  );

  const child = screen.getByText(/Test children/i);
  expect(child).toBeInTheDocument();
});