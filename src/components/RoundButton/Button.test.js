import { render, screen, fireEvent } from '@testing-library/react';
import RoundButton from './RoundButton.component';

it('renders Button without crashing', () => {
  render(
    <Button/>
  );
});

it('renders children without crashing', () => {
  render(
    <Button>Test children</Button>
  );

  const child = screen.getByText(/Test children/i);
  expect(child).toBeInTheDocument();
});

it('inherits styles prop correctly', () => {
  render(
    <Button style={{color: "red"}}>Test style</Button>
  );

  const styleBtn = screen.getByText(/Test style/i);
  expect(styleBtn).toHaveStyle("color: red");
});

it('should handle the props click event', () => {
  window.alert = jest.fn();
  render(<Button onClick={() => alert('clicked!')}>Test onClick</Button>);

  const button = screen.getByText(/Test onClick/i);
  fireEvent.click(button);
  expect(window.alert).toHaveBeenCalledWith('clicked!');
});
