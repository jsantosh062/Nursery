import { createAsyncThunk} from "@reduxjs/toolkit";

export const fetchPlants = createAsyncThunk(
    'plants/fetchPlants',
    async()=> {
        const response = await fetch('/api/plants');
        return await response.json();
    }
)