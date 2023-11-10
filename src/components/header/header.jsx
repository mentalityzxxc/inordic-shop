
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { TEXT } from '../../consts.ts'

import logoInordic from '../../assets/logo.png'

import './style.css';

export function Header() {

    const [text, setText] = useState(TEXT.header)
    
    // хук useState https://legacy.reactjs.org/docs/hooks-state.html
    const [menu, setMenu] = useState(text.menu)
    const [visibleMenu, setVisibleMenu] = useState(false)
    const [theme, setTheme] = useState('light')
    const [lang, setLang] = useState('RU')


    // План на след занятие
    // 2 - Поработать со state
    // 3 - введем функции
    // 4 - рассмотреть события

    let array = [1, 2, 3, 4, 5];
    array.forEach(function(element, index){
        //console.log(element)
        if (element == 3) {
            //return 'x'
            array[index] = 'x'
        }
    });
    console.log(array)
    // На месте двойки, запишем строчку 'ДВА', 
    // Длинная запись
   /* const newArray = array.map(function(element){
        //console.log(element)
        if (element == 4) { 
            return 'x'
        } else {
            return 'y'
        }
    }) */
    const newArray = array.map((element) => (element == 4) ? 'x' : 'y')
    console.log(newArray)

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
            <nav>
                <div className='logo-container'>
                    <img 
                        src={logoInordic} 
                        alt="Логотип Inordic" 
                    />
                </div>
                {
                    visibleMenu &&
                        <ul className='menu'>
                            {menu[lang].map((menuItem) => (
                                    <li 
                                        className='menu-item' 
                                        key={menuItem.id}
                                    >
                                        <Link to={menuItem.to}>
                                            {menuItem.text}
                                        </Link>
                                    </li>
                                )
                            )}
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
                <div>
                    <input 
                        type="radio" 
                        id="light" name="theme" 
                        value="light" 
                        checked 
                        onClick={() => setTheme('light')}
                    />
                    <label for="light">{text.theme[lang].Light}</label>
                    <input 
                        type="radio" 
                        id="dark" name="theme" 
                        value="dark"
                        onClick={() => setTheme('dark')}
                    />
                    <label for="dark">{text.theme[lang].Dark}</label>
                </div>
                <select onChange={handlerChangeLang}>
                    <option selected value="RU">{text.lang[lang].RU}</option>
                    <option value="EN">{text.lang[lang].EN}</option>
                </select>
            </nav>
        </header>
    )
}