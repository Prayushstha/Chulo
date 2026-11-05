import '../slider.css'
    
export function ImageSlider() {
  return (
    <div className="slider">
      <div className="slider__item">
        <label className="slider__control">
          <input type="radio" aria-label="Show slide 1" name="slider" defaultChecked />
        </label>
        <div className="slider__content">
          <img src='/images/slider/1.jpg' alt="" />
        </div>
      </div>
      <div className="slider__item">
        <label className="slider__control">
          <input type="radio" aria-label="Show slide 2" name="slider" />
        </label>
        <div className="slider__content">
          <img src="/images/slider/2.jpg" alt="" />
        </div>
      </div>
      <div className="slider__item">
        <label className="slider__control">
          <input type="radio" aria-label="Show slide 3" name="slider" />
        </label>
        <div className="slider__content">
          <img src="/images/slider/3.jpg" alt="" />
        </div>
      </div>
      <div className="slider__item">
        <label className="slider__control">
          <input type="radio" aria-label="Show slide 4" name="slider" />
        </label>
        <div className="slider__content">
          <img src="/images/slider/4.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

