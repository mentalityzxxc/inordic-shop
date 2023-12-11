import userJSON from '../../../stub/users.json'
// Экшены для пользователей
export function createExtraActions() {
    return {
        getItemUser: getItemUser,
    };    
    function getItemUser({login, password}) {
        return {
            type: 'GET_ITEM_USER',
            payload: userJSON[0],
        }
    }
}