import '../Styles/slider.css'
    
export function ImageSlider() {
  return (
    <div className="slider">
      <div className="slider__item">
        <label className="slider__control">
          <input type="radio" name="slider" defaultChecked />
        </label>
        <div className="slider__content">
          <img src='/images/slider/1.jpg' alt="" />
        </div>
      </div>
      <div className="slider__item">
        <label className="slider__control">
          <input type="radio" name="slider" />
        </label>
        <div className="slider__content">
          <img src="/images/slider/2.jpg" alt="" />
        </div>
      </div>
      <div className="slider__item">
        <label className="slider__control">
          <input type="radio" name="slider" />
        </label>
        <div className="slider__content">
          <img src="/images/slider/3.jpg" alt="" />
        </div>
      </div>
      <div className="slider__item">
        <label className="slider__control">
          <input type="radio" name="slider" />
        </label>
        <div className="slider__content">
          <img src="/images/slider/4.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

