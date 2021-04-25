import { render, screen } from '@testing-library/react';
import MarketPlace from './components/MarketPlace';

test('renders learn react link', () => {
  render(<MarketPlace />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
