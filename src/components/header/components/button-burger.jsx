/**
 * Компонент кнопки бургера в шапке сайта
 * 
 * @param setVisibleMenu Функция для установки видимости меню
 * @param visibleMenu флаг, который определяет, выводим бургер или крестик
 * 
 * @returns Component Опционально в зависимости от флага visibleMenu, 
 * либо бургер, либо компонент с крестиком
 */
export function ButtonBurger({setVisibleMenu, visibleMenu}){
    return !visibleMenu 
        ?
            (
                <button 
                    class="btn"
                    onClick={() => setVisibleMenu(true)}
                >
                    <i class="fa fa-bars"></i>
                </button>
            )
        :
            (
                <button 
                    class="btn"
                    onClick={() => setVisibleMenu(false)}
                >
                    <i class="fa fa-close"></i>
                </button>
            )
}