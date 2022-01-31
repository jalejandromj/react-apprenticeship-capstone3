import { render, screen, fireEvent } from '@testing-library/react';
import RoundButton from './RoundButton.component';

it('renders Button without crashing', () => {
  render(
    <RoundButton/>
  );
});

it('renders children without crashing', () => {
  render(
    <RoundButton>Test children</RoundButton>
  );

  const child = screen.getByText(/Test children/i);
  expect(child).toBeInTheDocument();
});

it('indeed is round', () => {
  render(
    <RoundButton>Round style</RoundButton>
  );

  const styleBtn = screen.getByText(/Round style/i);
  expect(styleBtn).toHaveStyle("border-radius: 50%");
});

it('inherits styles prop correctly', () => {
  render(
    <RoundButton style={{color: "red"}}>Test style</RoundButton>
  );

  const styleBtn = screen.getByText(/Test style/i);
  expect(styleBtn).toHaveStyle("color: red");
});

it('should handle the props click event', () => {
  window.alert = jest.fn();
  render(<RoundButton onClick={() => alert('clicked!')}>Test onClick</RoundButton>);

  const button = screen.getByText(/Test onClick/i);
  fireEvent.click(button);
  expect(window.alert).toHaveBeenCalledWith('clicked!');
});
