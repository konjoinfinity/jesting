import { render, screen } from '@testing-library/react';
import App from './App';
import {Header} from './Header'

test('renders Konjo link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Konjo/i);
  expect(linkElement).toBeInTheDocument();
});

test("image renders", () => {
  render(<App />);
  const image = screen.getByAltText(/logo/i);
  expect(image).toBeInTheDocument();
})

it('render header', () => {
  // Arrange
  const color = 'purple'

  // Act
  const { container } = render(<Header color={color}></Header>)

  // Assert
  expect(container).toMatchSnapshot()
  expect(container.firstChild).toHaveClass(`header-${color}`)
})