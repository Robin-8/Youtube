import { configureStore } from '@reduxjs/toolkit'
import handBurgerReducer from '../src/slice/handBurgerSlice'
import searchReducer from '../src/slice/searchSlice'
import chatReducer from '../src/slice/chatSlice'

const store = configureStore({
    reducer:{
        handbur: handBurgerReducer,
        search: searchReducer,
        chat:chatReducer
    }
})

export default store