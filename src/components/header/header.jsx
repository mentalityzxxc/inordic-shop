
import { useState } from 'react';

import { TEXT } from '../../consts.ts'
import { Logo } from './components/logo.jsx'
import { Menu } from './components/menu.jsx'
import { Theme } from './components/theme.jsx'
import { Lang } from './components/lang.jsx'
import { ButtonBasket } from './components/button-basket.jsx'
import { ButtonBurger } from './components/button-burger.jsx'
import { useSelector } from 'react-redux'


import './style.css';

export function Header() {

    const [text, setText] = useState(TEXT.header)
    
    // хук useState https://legacy.reactjs.org/docs/hooks-state.html
    const [menu, setMenu] = useState(text.menu)
    const [visibleMenu, setVisibleMenu] = useState(false)
    const [theme, setTheme] = useState('light')
    const [lang, setLang] = useState('RU')

    const handlerChangeLang = (event) => { 
        // Получаем весь селект
        const select = event.target
        // Получим выбранную опцию из селекта
        const currentSelectOption = select.value
        console.log(currentSelectOption)
        // Устанавливаем выбранный язык
        setLang(currentSelectOption)
    }

    return (
        <header className={theme}>
            <Logo />
            <nav>
                {visibleMenu && <Menu menu={menu[lang]} />}
                <Theme setTheme={setTheme} text={text.theme[lang]} />
                <Lang text={text.lang[lang]} handlerChangeLang={handlerChangeLang}/>
                <section className='button-container-header'>
                    <ButtonBasket />
                    <ButtonBurger 
                        visibleMenu={visibleMenu} 
                        setVisibleMenu={setVisibleMenu}
                    />
                </section>
            </nav>
        </header>
    )
}