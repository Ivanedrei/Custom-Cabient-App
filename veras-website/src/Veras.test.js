import { render, screen } from '@testing-library/react';
import Veras from './Veras';

test('renders learn react link', () => {
  render(<Veras />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
