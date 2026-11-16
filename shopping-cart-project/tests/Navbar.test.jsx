import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { describe, it, expect } from 'vitest';
import Navbar from '../src/components/Navbar/Navbar';

function renderNavbar(cart) {
  render(
    <MemoryRouter>
      <Navbar cart={cart} />
    </MemoryRouter>,
  );
  return screen.getByRole('link', { name: /cart/i });
}

describe('Navbar', () => {
  it('links to every page', () => {
    renderNavbar([]);

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Shop' })).toHaveAttribute('href', '/shop');
    expect(screen.getByRole('link', { name: /cart/i })).toHaveAttribute('href', '/cart');
  });

  it('shows the total number of units in the cart, not the number of products', () => {
    const cartLink = renderNavbar([
      { id: 1, quantity: 2 },
      { id: 2, quantity: 3 },
    ]);

    expect(cartLink).toHaveTextContent('5');
  });

  it('hides the count when the cart is empty', () => {
    const cartLink = renderNavbar([]);

    expect(cartLink).toHaveTextContent(/^Cart$/);
  });
});
