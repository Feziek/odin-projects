import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import ProductCard from '../src/components/ProductCard/ProductCard';

const product = {
  id: 1,
  title: 'Blue Backpack',
  description: 'Fits a laptop',
  price: 25,
  image: 'backpack.jpg',
};

function setup(props = {}) {
  const onSubmit = vi.fn();
  render(<ProductCard {...product} isInCart={false} onSubmit={onSubmit} {...props} />);
  return { onSubmit, user: userEvent.setup() };
}

describe('ProductCard', () => {
  it('shows the product details', () => {
    setup();

    expect(screen.getByText('Blue Backpack')).toBeInTheDocument();
    expect(screen.getByText('Fits a laptop')).toBeInTheDocument();
    expect(screen.getByText('$25')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Blue Backpack' })).toHaveAttribute(
      'src',
      'backpack.jpg',
    );
  });

  it('adds a quantity of 1 by default', async () => {
    const { onSubmit, user } = setup();

    await user.click(screen.getByRole('button', { name: 'Add to Cart' }));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith(product, 1);
  });

  it('sends the quantity typed into the input', async () => {
    const { onSubmit, user } = setup();
    const input = screen.getByLabelText(/quantity/i);

    await user.clear(input);
    await user.type(input, '3');
    await user.click(screen.getByRole('button', { name: 'Add to Cart' }));

    expect(onSubmit).toHaveBeenCalledWith(product, 3);
  });

  it('falls back to 1 when the quantity field is empty', async () => {
    const { onSubmit, user } = setup();

    await user.clear(screen.getByLabelText(/quantity/i));
    await user.click(screen.getByRole('button', { name: 'Add to Cart' }));

    expect(onSubmit).toHaveBeenCalledWith(product, 1);
  });

  it('shows "Already in Cart" and hides the controls when the product is in the cart', () => {
    setup({ isInCart: true });

    expect(screen.getByText('Already in Cart')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Add to Cart' })).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/quantity/i)).not.toBeInTheDocument();
  });
});
