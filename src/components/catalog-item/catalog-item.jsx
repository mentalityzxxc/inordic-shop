import { useState } from "react";
import { useParams } from 'react-router-dom';
import './style.css';


import goodJSON from '../../stub/goods.json'

export function CatalogItem() {
    // useParams позволяет получить значения из поисковой строки
    const { id } = useParams();
    const [countGood, setCountGood] = useState(1)
    const { TITLE, DISCR, PRICE, IMG, COUNT } = goodJSON.find((good) => good.ID == id)  
    
    const handlerAddToBasket = () => {
        alert('Добавление товара в корзину')
    }

    const handlerClick = (operation) => {
        if (operation == 'mines') {
            const newCount = countGood - 1
            if (countGood > 1) {
                setCountGood(newCount)
            }
        } else {
            setCountGood((prevCount) => 
                prevCount < COUNT ? ++prevCount : prevCount
            )
        }
    }

    return (
        <div className='good-item'>
            <img src={require(`../../assets/${IMG}`)} />
            <h1>{TITLE}</h1>
            <h2>{DISCR}</h2>
            <p>{PRICE}</p>
            <div className='buttons-block'>
                <button onClick={() => handlerClick('mines')}>
                    -
                </button>
                <p>
                    {countGood}
                </p>
                <button onClick={() => handlerClick('plus')}>
                    +
                </button>
            </div>
            {
                countGood == COUNT ? (
                    <div className="error">
                        На складе всего {COUNT} штук данного товара, вы не можете добавить больше
                    </div>
                ) : ''
            }
            <button className="add-to-basket" onClick={() => handlerAddToBasket()}>
                Добавить в корзину
            </button>
        </div>
    )
}