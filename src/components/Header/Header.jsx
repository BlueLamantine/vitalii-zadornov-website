import './Header.scss';

const Header = () => {
  return (
    <header className="header res-padd-lr90">
      <div className="title">
        <h1 className="main-title">
          <span className="cap-let">В</span>италий Задорнов
        </h1>
        <h4 className="sub-title">организация и музыкальное оформление мероприятий</h4>
      </div>
      <div className="phone-block">
        <i className="fa fa-phone"></i>
        <div className="phone">
          <a href="tel:+380930000000">+38 (066) 5190590</a>
          <a href="tel:+380930000000">+38 (097) 4344269</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
