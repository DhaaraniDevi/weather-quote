import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
export const getImages = createAsyncThunk(
    'backgroundImage/getImages',
    async () => {
  
      const response = await fetch('api.unsplash.com/search/photos?page=1&query=weather');
      const json = await response.json();
  
      return json;
    }
  )
  
const options = {
    name: 'backgroundImage',
    initialState: {
        backgroundImage: {

        }
    },
    extraReducers: {
        
    }
    
}