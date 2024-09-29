import './index.css';

export const Header = () =>{
    return(<>
        <div className="header__container">
            <div className="header__contant">
                <p className="header__logo">LM</p>
                <div className="header__menu">
                    <a href="" className="menu__item">Топ</a>
                    <a href="" className="menu__item">Подобный фильм</a>
                    <a href="" className="menu__item">Случайный фильм</a>
                </div>
            </div>
        </div>
    </>)
}