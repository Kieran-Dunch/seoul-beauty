import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SEUOL BEAUTY text', () => {
  render(<App />);
  const textElement = screen.getByText(/SEUOL BEAUTY/i);
  expect(textElement).toBeInTheDocument();
});
