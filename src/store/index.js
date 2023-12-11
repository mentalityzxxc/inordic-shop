import { configureStore } from "@reduxjs/toolkit";

import { slice } from './slices/goods';

// Конфигурация глобального хранилища
export const store = configureStore({
    reducer: {
        goods: slice.reducer
    },
});