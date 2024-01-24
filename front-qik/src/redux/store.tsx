import { configureStore } from '@reduxjs/toolkit'
import sliceConfig from './sliceConfig'

const store = configureStore({
    reducer: {
        config: sliceConfig
    }
})

export default store