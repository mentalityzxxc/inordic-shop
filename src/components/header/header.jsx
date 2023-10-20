
import { Link } from 'react-router-dom';
import { useState } from 'react';

import logoInordic from '../../assets/logo.png'

import './style.css';

export function Header() {
    // хук useState https://legacy.reactjs.org/docs/hooks-state.html
    const [menu, setMenu] = useState([
        {
            id: '232434345',
            text: 'Главная',
            to: '/'
        },
        {
            id: '2324344545',
            text: 'Каталог',
            to: '/catalog'
        },
        {
            id: '23243454345',
            text: 'Регистрации',
            to: '/registration'
        },
        {
            id: '23672434345',
            text: 'Авторизация',
            to: '/login'
        }
    ])
    //Рассмотреть map на более простых примерах и сравнить с forEach
    return (
        <header>
            <nav>
                <div className='logo-container'>
                    <img src={logoInordic} alt="Логотип Inordic" />
                </div>
                <ul>
                    {menu.map((menuItem) => (
                        <li key={menuItem.id}>
                            <Link to={menuItem.to}>
                                {menuItem.text}
                            </Link>
                        </li>
                    ))}
                </ul>
                <button onClick={() => setMenu([])}>Скрыть меню</button>
            </nav>
        </header>
    )
}