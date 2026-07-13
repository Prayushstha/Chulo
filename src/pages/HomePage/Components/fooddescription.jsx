    <dialog
      id="dialog"
      style="
        max-width: 140vh;
        min-height: 70vh;
        margin: auto;
        border-radius: 24px;
        border: none;
      "
    >
      <button className="dialog-close-btn" onclick="closeDialog()">×</button>
      <div className="food-description-container" id="desc">
        <div className="food-picture-container" style="max-width: 600px">
          <img className="food-description-picture" src="" />
        </div>

        <div className="food-description" style="margin-left: 20px">
          <div className="food-name">Chicken Burger</div>

          <div className="food-price">
            <div className="original-price">&#x20B9; 190</div>
            <div className="discounted-price">&#x20B9; 140</div>
          </div>

          <button className="buy-button">Buy</button>

          <div className="description">
            <div className="description-heading">DETAILS ABOUT THIS MEAL</div>
            <div className="description-content"></div>

            <div className="veg-non-veg">
              <img
                className="food-sticker"
                src="assets/images/food-pictures/icn-non-veg.svg"
              />
              <div className="veg-non">Non-veg</div>
            </div>

            <div className="ingredients-heading">INGREDIENTS</div>
            <div className="ingredients-content"></div>
          </div>

          <div className="nutrients-heading">NUTRIENTS</div>
          <div className="nutrients-content">
            <div className="nutrients-value">
              <div className="nutrients-number">450</div>
              <div>Energy (kcl)</div>
            </div>
            <div className="nutrients-value">
              <div className="nutrients-number">20</div>
              <div>Fats (g)</div>
            </div>
            <div className="nutrients-value">
              <div className="nutrients-number">35</div>
              <div>Carbs (g)</div>
            </div>
            <div className="nutrients-value">
              <div className="nutrients-number">4</div>
              <div>Fiber (g)</div>
            </div>
            <div className="nutrients-value">
              <div className="nutrients-number">37</div>
              <div>Protein (g)</div>
            </div>
          </div>
        </div>
      </div>
    </dialog>