import { fireEvent, render, screen } from '@testing-library/react';
import Avaleht from '../pages/Avaleht';

test('renders "muuda kogust" text when nothing changed', () => {
  render(<Avaleht />);
  const linkElement = screen.getByText(/Muuda kogust/i); //i teeb väikesed tähed
  expect(linkElement).toBeInTheDocument();
});

test('renders "vähendasid kogust" when "vähendatud" button is pressed' , () => {
render(<Avaleht />);
const increaseButton = screen.getByText("+");
fireEvent.click(increaseButton)
const button = screen.getByText(/-/);
fireEvent.click(button)
const linkElement = screen.getByText(/vähendasid kogust/i);
expect(linkElement).toBeInTheDocument();
} )

test('renders "suurendasid kogust" when "suurenda" button is pressed' , () => {
  render(<Avaleht />);
  
  const button = screen.getByText("+");
  fireEvent.click(button)
  const linkElement = screen.getByText(/Suurendasid kogust/i);
  expect(linkElement).toBeInTheDocument();
  } )