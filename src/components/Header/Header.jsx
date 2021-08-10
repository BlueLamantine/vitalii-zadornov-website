import './Header.scss';

const Header = () => {
  return (
    <header className="header res-padd-lr90">
      <div className="title">
        <h1 className="main-title">
          <span className="cap-let">В</span>италий Задорнов
        </h1>
        <h4 className="sub-title">организация мероприятий</h4>
      </div>
      <div className="phone-block">
        <i className="fa fa-phone"></i>
        <div className="phone">
          <a href="tel:+380930000000">+38 (093) 0000000</a>
          <a href="tel:+380930000000">+38 (093) 0000000</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
