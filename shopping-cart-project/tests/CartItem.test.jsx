import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import CartItem from '../src/components/CartItem/CartItem';

const item = {
  id: 7,
  title: 'Slim T-Shirt',
  image: 'shirt.jpg',
  price: 10,
  quantity: 3,
};

function setup() {
  const onUpdateQuantity = vi.fn();
  const onRemove = vi.fn();
  render(<CartItem {...item} onUpdateQuantity={onUpdateQuantity} onRemove={onRemove} />);
  return { onUpdateQuantity, onRemove, user: userEvent.setup() };
}

describe('CartItem', () => {
  it('shows the title, price, quantity, and subtotal', () => {
    setup();

    expect(screen.getByRole('img', { name: 'Slim T-Shirt' })).toHaveAttribute(
      'src',
      'shirt.jpg',
    );
    expect(screen.getByText('Slim T-Shirt')).toBeInTheDocument();
    expect(screen.getByText('$10')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('$30.00')).toBeInTheDocument();
  });

  it('asks to increase the quantity by 1 when + is clicked', async () => {
    const { onUpdateQuantity, user } = setup();

    await user.click(screen.getByRole('button', { name: /increase quantity/i }));

    expect(onUpdateQuantity).toHaveBeenCalledWith(7, 1);
  });

  it('asks to decrease the quantity by 1 when - is clicked', async () => {
    const { onUpdateQuantity, user } = setup();

    await user.click(screen.getByRole('button', { name: /decrease quantity/i }));

    expect(onUpdateQuantity).toHaveBeenCalledWith(7, -1);
  });

  it('asks to remove the item when Remove is clicked', async () => {
    const { onRemove, user } = setup();

    await user.click(screen.getByRole('button', { name: 'Remove' }));

    expect(onRemove).toHaveBeenCalledWith(7);
  });
});
