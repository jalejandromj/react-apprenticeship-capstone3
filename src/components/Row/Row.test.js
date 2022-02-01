import { render, screen } from '@testing-library/react';
import Row from './Row';

it('renders Row without crashing', () => {
  render(
    <Row/>
  );
});

it('renders children without crashing', () => {
  render(
    <Row><div>Test children</div></Row>
  );

  const child = screen.getByText(/Test children/i);
  expect(child).toBeInTheDocument();
});

it('inherits styles prop correctly', () => {
  render(
    <Row style={{color: "red"}}>Test style</Row>
  );

  const styleRow = screen.getByText(/Test style/i);
  expect(styleRow).toHaveStyle("color: red");
});
