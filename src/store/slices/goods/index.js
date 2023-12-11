import { createSlice } from '@reduxjs/toolkit';

// Создадим объект слайса 
export const slice = createSlice(
    {
       // Устанавливаем название слайса
       name: 'goods',
       // Состояние слайса по умолчанию
       initialState: {
          list: [],
          item: null,
          basket: [],
       },
       extraReducers: (builder) => {
         // Кейс который получает все товары и добавляет их в состояние редакса
        builder.addCase('GET_ALL_GOODS', (state, action) => {
          console.log('Сработал экстра редьюсер GET_ALL_GOODS', state, action)
          // Вытаскиваем поле payload и записываем в лист
          const { payload } = action
          // Заполним стейт
          state.list = payload
        })

        // Кейс для добавления товара в корзину
        builder.addCase('ADD_TO_BASKET', (state, action) => {
             const { payload } = action
            // Добавить в состояние корзины, передаваемый товар
            // Необходимо пушить, только если товара в коризне еще нет
            const findResult = state.basket.find(good => {
               console.log('good',good.ID)
               console.log('payload',payload.ID)
               if(good.ID == payload.ID) {
                  return true
               }
            })
            // Если добавляемый товар уже нашелся в стэйте корзины, заново добавлять его не нужно
            if (!findResult) {
               state.basket.push(payload)
            }
        })

       }
    }
)