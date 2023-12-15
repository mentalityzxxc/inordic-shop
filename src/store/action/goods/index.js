// createAsyncThunk - функция для создания асинхронного запроса к серверу
import { createAsyncThunk } from '@reduxjs/toolkit';
// goodJSON - заглушка содержащая все товары
import goodJSON from '../../../stub/goods.json'

// Экшены для товаров
export function createExtraActions() {
    // Возвращаем объект функций
    return {
        getAllGoods: getAllGoods(),
        addToBasket: addToBasket,
    };    

    // Действие, запрос к данным о товарах (Старая версия, которая не работает с асинхронным запросом)
    /*function getAllGoods() {
        //Запрос к данным на сервере
        let response = fetch('http://localhost:3000/good/get');
        console.log(response.json())

        return {
            // Тип обработчика, который сработает в редаксе
            type: 'GET_ALL_GOODS',
            // Всегда данные, текущего обработчика
            payload: goodJSON,
        }
    }*/

    function getAllGoods() {
        console.log('getAllGoods')
        return createAsyncThunk(
          'GET_ALL_GOODS',
            //response ответ от сервера
            async () => {
                const response = await fetch(`http://localhost:3000/good/get`).then( 
                    // после того как произойдет запрос, он преобразуется к json массиву
                    (response) => response.json()
                )
                return response
            }
        );
      }   


    // Действие, которое добавляет товар в корзину
    function addToBasket(good){
        return {
            type: 'ADD_TO_BASKET',
            // Передаем выбранные товар
            payload: good
        }
    }

}