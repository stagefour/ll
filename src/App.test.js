import { render, screen } from '@testing-library/react';
import BookTable from './components/BookTable';

describe("Simple Testing", () => {
test("renders BookTable which is my booking form component", () => {
  render(<BookTable times={['17:00', '19:00', '20:00', '22:00']} />);
  const linkElement = screen.getByText(/Booking Form/i);
  const submitButton = screen.getByRole("button");

  expect(linkElement).toBeInTheDocument();
  expect (submitButton).toBeDisabled();
});
});

// all green
