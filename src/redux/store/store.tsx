import {configureStore} from '@reduxjs/toolkit';
import changeWordReducer from './changeText';


export default configureStore({
    reducer: {
        change: changeWordReducer
    }
});