import { createSlice } from "@reduxjs/toolkit";

const changeText = createSlice({
    name: "word",
    initialState: {
        keyWord: "first"
    },
    reducers: {
        changeWord(state, action){
            console.log("reduser is working!!");
            console.log(state);
            console.log(action);
        }  
    },
});

export const {changeWord} = changeText.actions;

export default changeText.reducer;