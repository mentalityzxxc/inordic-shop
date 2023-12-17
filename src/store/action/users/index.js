import userJSON from '../../../stub/users.json'
import { createAsyncThunk } from '@reduxjs/toolkit';

// Экшены для пользователей
export function createExtraActions() {
    return {
        getItemUser: getItemUser(),
    };    
    /*function getItemUser({login, password}) {
        return {
            type: 'GET_ITEM_USER',
            payload: userJSON[0],
        }
    }*/
    function getItemUser() {
        return createAsyncThunk(
          'GET_ITEM_USER',
            //response ответ от сервера
            async (form) => {
                let response = await fetch('http://localhost:3000/user/login', {
                    method: 'POST',
                    body: new FormData(form)
                }).then( 
                    // после того как произойдет запрос, он преобразуется к json массиву
                    (response) => response.json()
                )
                return response[0]
            }
        );
      }   

}