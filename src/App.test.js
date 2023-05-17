import { render, screen } from '@testing-library/react';
import landingPage from './pages/Landingpage';

test('renders learn react link', () => {
  render(<landingPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

