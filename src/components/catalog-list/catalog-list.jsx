import goodJSON from '../../stub/goods.json'
import { Link } from 'react-router-dom';

import './style.css';

export function CatalogList() {
    console.log(goodJSON)
    return (
        <div>
            {goodJSON.map((goodItem) => {
                return (
                    <li key={goodItem.ID} className='good-list'>
                        <img src={require(`../../assets/${goodItem.IMG}`)} />
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
                            <Link to={goodItem.ID}>
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            </Link>
                        </section>
                    </li>
                )
            })}
        </div>
    )
}