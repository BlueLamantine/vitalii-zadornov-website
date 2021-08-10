import photo from './img/about.jpg';
import './About.scss';
const About = () => {
  return (
    <section className="about">
      <div className="about-info">
       
        <div className="about-text">
        <div className="about-title">
          <span className="cap-let">H</span>емного о себе
        </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            facilis eius recusandae, optio ut perferendis praesentium cupiditate
            placeat eum nesciunt cum quis est, nemo assumenda, corporis deleniti
            inventore possimus temporibus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            facilis eius recusandae, optio ut perferendis praesentium cupiditate
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            facilis eius recusandae, optio ut perferendis praesentium cupiditate
            placeat eum nesciunt
          </p>
        </div>

        <div className="about-photo">
          <img src={photo} alt="photo" className="main-photo" />
        </div>
      </div>
    </section>
  );
};

export default About;
