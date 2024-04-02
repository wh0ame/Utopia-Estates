import { Link } from 'react-router-dom';
import mouse from '../img/header/mouse.svg';
import logo from '../img/logo.svg';

function SmallHeader() {
    return (
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
                      <Link to="/header">О комплексе</Link>
                    </li>
                    <li>
                      <a href="#!">Район</a>
                    </li>
                    <li>
                      <Link to="/catalog">Каталог квартир</Link>
                    </li>
                    <li>
                      <Link to="/ipoteka">Ипотека</Link>
                    </li>
                    <li>
                      <a href="#!">Контакты</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
    )
}

export default SmallHeader;