import { createSlice} from "@reduxjs/toolkit";
import { fetchPlants } from "../Actions/homePlantActions";
import {Plant, plants} from "../../Interface/plants";
const initialState :plants =  {
  data : [
    {
      id: 1,
      name: "Cactus",
      image: "https://cdn.pixabay.com/photo/2022/10/16/17/34/green-leaves-7525661_1280.jpg",
      quantity: 15,
      description: "A resilient desert plant known for its thick, fleshy parts adapted to store water."
    },
    {
      id: 2,
      name: "Sunflower",
      image: "https://cdn.pixabay.com/photo/2021/09/08/18/00/flower-6607529_1280.jpg",
      quantity: 10,
      description: "Bright yellow flowers that turn to follow the sun, symbolizing adoration and loyalty."
    },
    {
      id: 3,
      name: "Bonsai",
      image: "https://cdn.pixabay.com/photo/2020/11/06/08/52/leaves-5717222_1280.jpg",
      quantity: 8,
      description: "A miniature tree cultivated in a pot, representing harmony, patience, and balance."
    },
    {
      id: 4,
      name: "Lavender",
      image: "https://cdn.pixabay.com/photo/2020/12/03/00/58/flower-of-christmas-5799112_1280.jpg",
      quantity: 5,
      description: "A fragrant herb known for its calming scent and beautiful purple flowers."
    },
    {
      id: 5,
      name: "Fern",
      image: "https://cdn.pixabay.com/photo/2010/12/13/10/21/flowers-2703_1280.jpg",
      quantity: 12,
      description: "A non-flowering plant with feathery leaves, thriving in shady and moist environments."
    },
    {
      id: 6,
      name: "Orchid",
      image: "https://cdn.pixabay.com/photo/2020/02/04/00/04/camilla-4817007_1280.jpg",
      quantity: 6,
      description: "Exotic and diverse flowers known for their intricate blooms and vibrant colors."
    },
    {
      id: 7,
      name: "Bamboo",
      image: "https://cdn.pixabay.com/photo/2022/08/05/18/50/houseplant-7367379_1280.jpg",
      quantity: 7,
      description: "A fast-growing grass that symbolizes strength and flexibility."
    },
    {
      id: 8,
      name: "Rose",
      image: "https://cdn.pixabay.com/photo/2019/06/17/08/24/pastel-4279379_1280.jpg",
      quantity: 20,
      description: "Classic flowers symbolizing love and passion, available in various colors."
    }
  ],
  loading : false,
  error : false,
  message : ""
}
const homePlantSlice = createSlice({
    name : "HomePlant",
    initialState,
    reducers : {
      PRODUCT_INVENTORY_DECREMENT : (state,action) => {
        state.data.map((el: Plant) => {
          if(el.quantity && el.id == action.payload){
            el.quantity--;
          }
        });
        state.loading = false;
      },
      PRODUCT_INVENTORY_INCREMENT : (state,action) => {
        state.data.map((el: Plant) => {
          if(el.id == action.payload){
            el.quantity++;
          }
        });
        state.loading = false;
      }
    },
    extraReducers :  (builder) => {
      builder
      .addCase(fetchPlants.pending,(state)=> {
        state.loading = true;
      }) 
      .addCase(fetchPlants.fulfilled,(state,action)=>{
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPlants.rejected,(state,action)=>{
        state.loading=false;
        state.error = true;
        state.message = action.error.message!
      })    }
})
export const {PRODUCT_INVENTORY_INCREMENT,PRODUCT_INVENTORY_DECREMENT} = homePlantSlice.actions
export default homePlantSlice.reducer