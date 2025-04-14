import { createSlice} from "@reduxjs/toolkit";
import { fetchCarts } from "../Actions/cartActions";
import { cart } from "../../Interface/cart";
import { Plant } from "../../Interface/plants";

const initialState :cart =  {
  data : [
   
  ],
  loading : false,
  error : false,
  message : ""
}
const cartSlice = createSlice({
    name : "Cart",
    initialState,
    reducers : {
        ADD_TO_CART : (state : cart,action) => {
            const plant : Plant = action.payload; // Ensure this is the full plant object
            const existingItem = state.data.find(item  => item.plant.id === plant.id);
        
            if (existingItem) {
              existingItem.quantity += 1;
            } else {
              state.data.push({ plant, quantity: 1 });
            }
            state.loading  = false
          },
          REMOVE_FROM_CART : (state,action)=> {
            const plant : Plant = action.payload; // Ensure this is the full plant object
            const existingItem = state.data.find(item => item.plant.id === plant.id);
        
            if (existingItem && existingItem.quantity > 1) {
              existingItem.quantity -= 1;
            } else {
              state.data = state.data.filter(el => el.plant.id !== plant.id);
            }
            state.loading  = false
          }
    },
    extraReducers :  (builder) => {
      builder
      .addCase(fetchCarts.pending,(state)=> {
        state.loading = true;
      }) 
      .addCase(fetchCarts.fulfilled,(state,action)=>{
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCarts.rejected,(state,action)=>{
        state.loading=false;
        state.error = true;
        state.message = action.error.message!
      })    }
})
export const {ADD_TO_CART,REMOVE_FROM_CART} = cartSlice.actions
export default cartSlice.reducer