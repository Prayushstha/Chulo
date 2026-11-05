import { Link } from 'react-router';

export function FoodCard({ item, onAdd }) {
  return <article className="food-preview">
    <Link to={`/product/${item.id}`} aria-label={`View ${item.name}`}>
      <div className="food-image-wrapper"><img className="food-picture" src={`/images/food-pictures/${item.image}`} alt={item.name} loading="lazy" /></div>
      <h3 className="food-name">{item.name}</h3>
    </Link>
    <div className="food-description">
      <div className="food-rating" aria-label={`${item.rating} out of 5 stars`}><span aria-hidden="true">{'★'.repeat(Math.floor(item.rating))}{'☆'.repeat(5 - Math.floor(item.rating))}</span></div>
      <p className="food-item-description">{item.shortDescription}</p>
      <div className="food-sub-description"><span className="food-price">Rs. {item.price}</span><button className="buy-button" aria-label={`Add ${item.name} to cart`} onClick={() => onAdd(item)}>Buy</button></div>
    </div>
  </article>;
}
