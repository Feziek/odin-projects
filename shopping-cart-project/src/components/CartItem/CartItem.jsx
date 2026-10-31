export default function CartItem({
  id,
  title,
  image,
  price,
  quantity,
  onUpdateQuantity,
  onRemove,
}) {
  return (
    <div className='cart-item'>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>${price}</p>
      <div>
        <button type='button' onClick={() => onUpdateQuantity(id, -1)}>
          -
        </button>
        <span>{quantity}</span>
        <button type='button' onClick={() => onUpdateQuantity(id, 1)}>
          +
        </button>
      </div>
      <p>Subtotal: ${(price * quantity).toFixed(2)}</p>
      <button type='button' onClick={() => onRemove(id)}>
        Remove
      </button>
    </div>
  );
}
