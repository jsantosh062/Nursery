import { createAsyncThunk} from "@reduxjs/toolkit";

export const fetchCarts = createAsyncThunk(
    'plants/carts',
    async()=> {
        const response = await fetch('/api/carts');
        return await response.json();
    }
)