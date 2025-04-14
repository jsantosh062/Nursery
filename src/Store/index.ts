import { configureStore } from "@reduxjs/toolkit";
import homePlantSlice from '../Features/Reducers/homePlantSlice'
import cartSlice from '../Features/Reducers/cartSlice'
const store = configureStore({
    reducer : {
        plants : homePlantSlice,
        cart : cartSlice
    }
})
export default store;