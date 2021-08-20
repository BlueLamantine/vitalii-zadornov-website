import './Footer.scss';
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="summary-block">
          <div className="title">
            <div className="main-title">
              <span className="cap-let">В</span>италий Задорнов
            </div>
            <p>
              Тамада. Оганизация мероприятий. Ведущий Организация и проведение
              свадеб, юбилеев, корпоративов
            </p>
          </div>
        </div>
        <div className="phone">
          <a href="tel:+380930000000">+38 (066) 5190590</a>
          <a href="tel:+380930000000">+38 (097) 4344269</a>
        </div>
      </div>
      <div className="copy">©2021</div>
    </footer>
  );
};
export default Footer;
