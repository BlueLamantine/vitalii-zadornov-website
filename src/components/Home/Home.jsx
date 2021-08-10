import Carousel from '../Carousel';
import About from '../About';
import Social from '../Social';
import Info from '../Info';
const Home = () => {
  return (
    <>
      <Carousel />
      <div className="content-wrapper">
        <About />
        <Social />
        <Info />
      </div>
    </>
  );
};

export default Home;
