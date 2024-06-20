import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Basket, BasketState } from './interface'

const INITIAL_STATE: Basket [] = []
const sliceBasket= createSlice({
    name: 'basket',
    initialState: INITIAL_STATE,
    reducers: {
        addBasket (state, { payload }: PayloadAction<Basket> ) {
            state.push(payload);
        }
    }
})

export default sliceBasket.reducer

export const { addBasket } = sliceBasket.actions

export const useBasket = (state: BasketState) => {
    return state.basket as Basket[]
}