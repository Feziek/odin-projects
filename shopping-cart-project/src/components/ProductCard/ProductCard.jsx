export default function ProductCard({ id, title, description, price, image }) {
  return (
    <div className='card'>
      <img src={image} />
      <p>{title}</p>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}
