import './Styles/products.css'
import { useParams } from "react-router";
import { foodItems } from '../../assets/Backend/descriptions';
export function Products() {
  const { id } = useParams();
 const currentItem =  foodItems.find((item)=>{
    return item.id === Number(id);
  })
   console.log(currentItem);

  if (currentItem) return(
    <div className="main-container">
      <div className="food-description-container" id="desc">
        <div className="food-picture-container" style={{maxWidth: '600px'}}>
          <img className="food-description-picture" src={`/images/food-pictures/${currentItem.image}`} />
        </div>
        <div className="food-description" style={{marginLeft: "20px"}}>
          <div className="food-name">{currentItem.name}</div>

          <div className="food-price">
            <div className="original-price">&#x20B9; {currentItem.originalPrice}</div>
            <div className="discounted-price">&#x20B9; {currentItem.price}</div>
          </div>

          <button className="buy-button">Buy</button>

          <div className="description">
            <div className="description-heading">DETAILS ABOUT THIS MEAL</div>
            <div className="description-content">{currentItem.description}</div>

            <div className="veg-non-veg">
              <img
                className="food-sticker"
                src={`images/${currentItem.type === "Non-veg" ? "icn-non-veg.svg" : "icn-veg.svg" }`}
              />
              <div className="veg-non">{currentItem.type}</div>
            </div>

            <div className="ingredients-heading">INGREDIENTS</div>
            <div className="ingredients-content">{currentItem.ingredients}</div>
          </div>

          <div className="nutrients-heading">NUTRIENTS</div>
          <div className="nutrients-content">
            <div className="nutrients-value">
              <div className="nutrients-number">{currentItem.nutrients.energy}</div>
              <div>Energy (kcl)</div>
            </div>
            <div className="nutrients-value">
              <div className="nutrients-number">{currentItem.nutrients.fats}</div>
              <div>Fats (g)</div>
            </div>
            <div className="nutrients-value">
              <div className="nutrients-number">{currentItem.nutrients.carbs}</div>
              <div>Carbs (g)</div>
            </div>
            <div className="nutrients-value">
              <div className="nutrients-number">{currentItem.nutrients.fiber}</div>
              <div>Fiber (g)</div>
            </div>
            <div className="nutrients-value">
              <div className="nutrients-number">{currentItem.nutrients.protein}</div>
              <div>Protein (g)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
   )
   else return (
    <div className="not-found">
        <h1>Food Item Not Found</h1>
    </div>
   )
}