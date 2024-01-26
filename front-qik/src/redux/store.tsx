import { configureStore } from '@reduxjs/toolkit'
import sliceConfig from './Config/sliceConfig'
import sliceBasket from './Basket/sliceBasket'

const store = configureStore({
    reducer: {
        config: sliceConfig,
        basket: sliceBasket
    }
})

export default store