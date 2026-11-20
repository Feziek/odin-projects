import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { describe, it, expect } from 'vitest';
import routes from '../routes';

function renderAt(path) {
  const router = createMemoryRouter(routes, { initialEntries: [path] });
  render(<RouterProvider router={router} />);
  return userEvent.setup();
}

describe('not-found page', () => {
  it('shows for an unknown URL and keeps the navbar', () => {
    renderAt('/banana');

    expect(
      screen.getByRole('heading', { name: /page not found/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('links back home', async () => {
    const user = renderAt('/banana');

    await user.click(screen.getByRole('link', { name: /back to home/i }));

    expect(
      screen.getByRole('heading', { name: /shop with ease/i }),
    ).toBeInTheDocument();
  });

  it('does not show for real pages', () => {
    renderAt('/cart');

    expect(
      screen.queryByRole('heading', { name: /page not found/i }),
    ).not.toBeInTheDocument();
  });
});
