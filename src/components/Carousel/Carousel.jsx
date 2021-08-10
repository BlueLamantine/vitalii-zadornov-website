import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.scss';
const Carousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <div id="slide1" className="slide-wrap">
            <div className="slide-layer">
              <div className="slide-text">
                Тут какой-то текст про организацию мероприятий
              </div>
            </div>
          </div>
        </div>
        <div>
          <div id="slide2" className="slide-wrap">
            <div className="slide-layer">
              <div className="slide-text">
                Тут какой-то текст про организацию мероприятий
              </div>
            </div>
          </div>
        </div>
        <div>
          <div id="slide3" className="slide-wrap">
            <div className="slide-layer">
              <div className="slide-text">
                Тут какой-то текст про организацию мероприятий
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
