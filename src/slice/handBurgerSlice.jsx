import { createSlice } from "@reduxjs/toolkit"

const handBurgerSlice = createSlice({
    name: 'handBurger',
    initialState: {
     handBurger:true 
    },
    reducers:{
        handilBurger:(state)=>{
            state.handBurger = !state.handBurger
        },
        handilburgOff:(state)=>{
            state.handBurger = false
        }
    }
})

export const {handilBurger, handilburgOff} = handBurgerSlice.actions

export default handBurgerSlice.reducer