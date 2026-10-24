export default function ProductCard({
  id,
  title,
  description,
  price,
  image,
  isInCart,
  onSubmit,
}) {
  return (
    <div className='card'>
      <div>
        <img src={image} />
        <p>{title}</p>
        <p>{description}</p>
        <p>{price}</p>
      </div>
      <div>
        {isInCart ? (
          <p>Already in Cart</p>
        ) : (
          <button
            type='button'
            onClick={() => onSubmit({ id, title, description, price, image })}
          >
            {' '}
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}
