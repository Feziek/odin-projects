import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { describe, it, expect, vi } from 'vitest';
import routes from '../routes';

// Replace the network call with fixed products.
vi.mock('../src/hooks/useProducts', () => ({
  useProducts: () => [
    [
      {
        id: 1,
        title: 'Blue Backpack',
        description: 'Fits a laptop',
        price: 25,
        image: 'backpack.jpg',
      },
      {
        id: 2,
        title: 'Slim T-Shirt',
        description: 'Soft cotton',
        price: 10,
        image: 'shirt.jpg',
      },
    ],
  ],
}));

function renderApp(path = '/shop') {
  const router = createMemoryRouter(routes, { initialEntries: [path] });
  render(<RouterProvider router={router} />);
  return userEvent.setup();
}

const navCartLink = () =>
  within(screen.getByRole('navigation')).getByRole('link', { name: /cart/i });

const addButtons = () => screen.getAllByRole('button', { name: 'Add to Cart' });

describe('shopping flow', () => {
  it('shows an empty cart message with a link to the shop', () => {
    renderApp('/cart');

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Start shopping' })).toHaveAttribute(
      'href',
      '/shop',
    );
    expect(screen.queryByRole('button', { name: 'Checkout' })).not.toBeInTheDocument();
  });

  it('adds a product, updates the navbar count, and marks the card as in the cart', async () => {
    const user = renderApp();

    await user.click(addButtons()[0]);

    expect(navCartLink()).toHaveTextContent('1');
    expect(screen.getByText('Already in Cart')).toBeInTheDocument();
    expect(addButtons()).toHaveLength(1);
  });

  it('uses the quantity chosen on the card', async () => {
    const user = renderApp();
    const input = screen.getAllByLabelText(/quantity/i)[0];

    await user.clear(input);
    await user.type(input, '3');
    await user.click(addButtons()[0]);

    expect(navCartLink()).toHaveTextContent('3');
  });

  it('lists the added products in the cart with the correct total', async () => {
    const user = renderApp();

    // 2 backpacks at $25 and 1 t-shirt at $10
    const input = screen.getAllByLabelText(/quantity/i)[0];
    await user.clear(input);
    await user.type(input, '2');
    await user.click(addButtons()[0]);
    await user.click(addButtons()[0]);

    await user.click(navCartLink());

    expect(screen.getByText('Blue Backpack')).toBeInTheDocument();
    expect(screen.getByText('Slim T-Shirt')).toBeInTheDocument();
    expect(screen.getByText('Total: $60.00')).toBeInTheDocument();
  });

  it('changes the quantity with + and -, and never goes below 1', async () => {
    const user = renderApp();
    await user.click(addButtons()[0]);
    await user.click(navCartLink());

    expect(screen.getByText('Total: $25.00')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /increase quantity/i }));
    expect(screen.getByText('Total: $50.00')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /decrease quantity/i }));
    expect(screen.getByText('Total: $25.00')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /decrease quantity/i }));
    expect(screen.getByText('Total: $25.00')).toBeInTheDocument();
  });

  it('removes an item and shows the empty message when the cart is empty', async () => {
    const user = renderApp();
    await user.click(addButtons()[0]);
    await user.click(navCartLink());

    await user.click(screen.getByRole('button', { name: 'Remove' }));

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
    expect(navCartLink()).toHaveTextContent(/^Cart$/);
  });

  it('lets a removed product be added again from the shop', async () => {
    const user = renderApp();
    await user.click(addButtons()[0]);
    await user.click(navCartLink());
    await user.click(screen.getByRole('button', { name: 'Remove' }));

    await user.click(within(screen.getByRole('navigation')).getByRole('link', { name: 'Shop' }));

    expect(addButtons()).toHaveLength(2);
  });

  it('shows a toast when checking out', async () => {
    const user = renderApp();
    await user.click(addButtons()[0]);
    await user.click(navCartLink());

    await user.click(screen.getByRole('button', { name: 'Checkout' }));

    expect(await screen.findByText('Checking out...')).toBeInTheDocument();
  });
});
