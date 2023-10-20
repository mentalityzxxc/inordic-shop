import { Outlet } from 'react-router-dom'

// Импортируем общие компоненты - шапку и подвал сайта
import { Header, Footer } from '../../components'

/**
 * Компонент для отображения страницы каталога
 */
export function Catalog(){
    return (
        <main>
            <Header />
                <Outlet />
            <Footer />
        </main>
    )
}