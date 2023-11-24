import { Link } from 'react-router-dom';

/**
 * Компонент меню
 * @prop menu массив с элементами меню
 * 
 * @returns Component
 */
export function Menu({menu}){
    return (
        <ul className='menu'>
            {menu.map((menuItem) => (
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
    )
}