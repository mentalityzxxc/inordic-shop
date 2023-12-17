// Импортируем общие компоненты - шапку и подвал сайта
import { Header, Footer } from '../../components'
import { Loader } from '../../components/loader'
import { createExtraActions } from '../../store/action/users'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react";

/**
 * Компонент для отображения формы авторизации
 */
export function Login(){

    const {getItemUser} = createExtraActions();
    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false)

    // Получить данные об авторизованном пользователе
    // Обращение к состоянию происходит при помощи useSelector
    const user = useSelector((state) => state.users.item)
    console.log('user', user)

    const loginHandler = () => {
        console.log('Сработал loginHandler', event);
        setIsLoading(true)
        // Остановим стандартное поведение кнопки (Перезагрузку страницы)
        // Функция preventDefault - оставливает любое стандартное (блаузерное) поведение элемента
        event.preventDefault();

        // Получим значения, которые пользователь ввел в элементы формы 
        //const login = event.srcElement.LOGIN.value
        //const password = event.srcElement.PASSWORD.value
        const form = event.srcElement

        // Задействовать редакс
        setTimeout(() => {
            dispatch(
                getItemUser(form)
            );
            setIsLoading(false);
        }, 4000)

    }

    if(isLoading) {
        return (
            <main>
                <Header />
                <Loader />
                <Footer />
            </main> 
        )   
    }

    return (
        <main>
            <Header />
            <h1>Форма авторизации</h1>
            {
                user ? (
                    <h2>
                        Вы успешно авторизованы: {user.NAME} {user.SURNAME}
                    </h2>
                ) : (
                    <form onSubmit={loginHandler}>
                        <p><input type="text" name="LOGIN" id='LOGIN'/></p>
                        <p><input type="password" name="PASSWORD" id='PASSWORD'/></p>
                        <p><input type="submit" value="Войти" /></p>
                    </form>
                )
            }
            <Footer />
        </main> 
    )
}