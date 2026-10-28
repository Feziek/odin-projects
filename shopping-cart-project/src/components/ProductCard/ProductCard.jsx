import { useState } from 'react';

export default function ProductCard({
  id,
  title,
  description,
  price,
  image,
  isInCart,
  onSubmit,
}) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className='card'>
      <div>
        <img src={image} />
        <p>{title}</p>
        <p>{description}</p>
        <p>${price}</p>
      </div>
      <div>
        {isInCart ? (
          <p>Already in Cart</p>
        ) : (
          <>
            <div>
              <label htmlFor='quantity'>Quantity: </label>
              <input
                type='number'
                id='quantity'
                value={quantity}
                onChange={() => setQuantity((prev) => prev + 1)}
              />
            </div>
            <button
              type='button'
              onClick={() =>
                onSubmit(
                  { id, title, description, price, image },
                  Number(quantity),
                )
              }
            >
              {' '}
              Add to Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
}
