import { useSelector } from 'react-redux'
/**
 * Компонент корзины в верхнем меню
 * 
 * @returns Comonent
 */
export function ButtonBasket(){
    // получаем данные, которые находятся в глобальном состоянии в блоке товаров - basket
    const basket = useSelector((state) => state.goods.basket)

    return (
        <button>
            <i class="fa fa-shopping-basket" aria-hidden="true"></i>({basket.length})
        </button>
    )
}