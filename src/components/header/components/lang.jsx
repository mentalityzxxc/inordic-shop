/**
 * Компонент - настройка формата языка на сайте
 * 
 * @returns Component
 */
export function Lang({text, handlerChangeLang}){
    return (
        <select onChange={handlerChangeLang}>
            <option selected value="RU">{text.RU}</option>
            <option value="EN">{text.EN}</option>
        </select>
    )
}