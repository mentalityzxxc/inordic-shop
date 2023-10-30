
import { Link } from 'react-router-dom';
import { useState } from 'react';

import logoInordic from '../../assets/logo.png'

import './style.css';

export function Header() {
    
    let _menu = [
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
    ]
    // хук useState https://legacy.reactjs.org/docs/hooks-state.html
    const [menu, setMenu] = useState(_menu)
    const [visibleMenu, setVisibleMenu] = useState(false)

    //План на след занятие
    // 1 - Рассмотреть map на более простых примерах и сравнить с forEach
    // 2 - Поработать со state
    // 3 - введем функции
    // 4 - рассмотреть события
    return (
        <header>
            <nav>
                <div className='logo-container'>
                    <img src={logoInordic} alt="Логотип Inordic" />
                </div>
                {
                    visibleMenu &&
                        <ul className='menu'>
                            {menu.map((menuItem) => (
                                <li className='menu-item' key={menuItem.id}>
                                    <Link to={menuItem.to}>
                                        {menuItem.text}
                                    </Link>
                                </li>
                            ))}
                        </ul> 
                }
                {
                    !visibleMenu 
                    ?
                        <button 
                            class="btn"
                            onClick={() => setVisibleMenu(true)}
                        >
                            <i class="fa fa-bars"></i>
                        </button>
                    :
                        <button 
                            class="btn"
                            onClick={() => setVisibleMenu(false)}
                        >
                            <i class="fa fa-close"></i>
                        </button>
                }
            </nav>
        </header>
    )
}