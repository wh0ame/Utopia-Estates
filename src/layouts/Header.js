import mouse from '../img/header/mouse.svg';
import logo from '../img/logo.svg';
function Header() {
    return (
        <header className="header none1">
        <div className="header__top">
          <div className="container">
            <div className="header__top-row">
              <a href="#!">
                <img src={logo} alt="UtopiaEstates" />
              </a>
              <div className="header__nav">
                <nav className="nav">
                  <ul className="nav__list">
                    <li>
                      <a href="#!">О комплексе</a>
                    </li>
                    <li>
                      <a href="#!">Район</a>
                    </li>
                    <li>
                      <a href="#!">Каталог квартир</a>
                    </li>
                    <li>
                      <a href="#!">Ипотека</a>
                    </li>
                    <li>
                      <a href="#!">Контакты</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header__nav-btn">
                <button className="nav-icon-btn">
                  <div className="nav-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h1 className="header__title">
            Жилой комплекс <br />в историческом центре
            <a href="#benefits">
              <img
                src={mouse}
                alt="Scroll next"
                className="header__title-icon"
              />
            </a>
          </h1>
        </div>
        <div className="header__footer">
          <div className="text-right">
            <a href="#section-map" className="info info--map">
              Наб. реки Фонтанки 10-15
            </a>
          </div>
          <a href="tel:+78121234567" className="info info--tel">
            8 (812) 123-45-67
          </a>
        </div>
      </header>
    );
}

export default Header;