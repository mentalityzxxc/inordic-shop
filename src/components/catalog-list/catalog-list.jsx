import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { createExtraActions } from '../../store/action/goods'
import { useSelector } from 'react-redux'
import { Loader } from '../loader'

import './style.css';

export function CatalogList() {

    // Декомпозируем функции из объекта функций который возвращает createExtraActions
    const {getAllGoods, addToBasket} = createExtraActions();
    const dispatch = useDispatch()
    
    // Обращение к состоянию происходит при помощи useSelector
    const goodList = useSelector((state) => state.goods.list)
    console.log('goodList',goodList)
    // Обработчик, который добавляет текущий товар в корзину
    const handlerAddBasket = (good) => {
        //Для того, чтобы запустить редакс, нужно вызвать функцию action внутри диспечера
        dispatch(
            addToBasket(good)
        )
    }

    useEffect(() => {
        setTimeout( () => {
            dispatch(
                getAllGoods()
            )
        }, 4000)
    }, [])
    
    // Если в какой то момент времени, goodList из стэйта - это пусто массив, 
    // Чтобы не показывать пустую страницу, выводит лоадер
    if(goodList.length == 0) {
       return <Loader />
    }
    
    return (
        <div>
            {goodList.map((goodItem) => {
                return (
                    <li key={goodItem.ID} className='good-list'>
                        <img src={goodItem.IMG} />
                        <div>
                            <Link to={goodItem.ID}>
                                {goodItem.TITLE}
                            </Link>
                            <p className='good-discr'>{goodItem.DISCR}</p>
                        </div>
                        <div className='good-price'>
                            {goodItem.PRICE} руб.
                        </div>
                        <section class='button-container'>
                            <Link to={goodItem.ID}>
                                <i className="fa fa-desktop" aria-hidden="true"></i>
                            </Link>
                            <button onClick={() => handlerAddBasket(goodItem)}>
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            </button>
                        </section>
                    </li>
                )
            })}
        </div>
    )
}