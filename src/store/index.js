import { configureStore } from "@reduxjs/toolkit";

import { slice as goodsSlice} from './slices/goods';
import { slice as usersSlice} from './slices/users';

// Конфигурация глобального хранилища
export const store = configureStore({
    reducer: {
        // Конфигурация для товаров
        goods: goodsSlice.reducer,
        // Конфигурация для ползователей
        users: usersSlice.reducer
    },
});