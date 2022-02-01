import { render, screen } from '@testing-library/react';
import Col from './Col';

it('renders Col without crashing', () => {
  render(
    <Col/>
  );
});

it('renders children without crashing', () => {
  render(
    <Col><div>Test children</div></Col>
  );

  const child = screen.getByText(/Test children/i);
  expect(child).toBeInTheDocument();
});

it('inherits styles prop correctly', () => {
  render(
    <Col style={{color: "red"}}>Test style</Col>
  );

  const styleRow = screen.getByText(/Test style/i);
  expect(styleRow).toHaveStyle("color: red");
});