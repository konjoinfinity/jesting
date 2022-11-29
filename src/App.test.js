import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Konjo/i);
  expect(linkElement).toBeInTheDocument();
});

test("header renders", () => {
  render(<App />);
  const header = screen.getByTitle(/header/i);
  expect(header).toBeInTheDocument();
})

test("image renders", () => {
  render(<App />);
  const image = screen.getByAltText(/logo/i);
  expect(image).toBeInTheDocument();
})