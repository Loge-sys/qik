import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Config, ConfigState } from './interface'

const INITIAL_STATE: Config [] = []
const sliceConfig = createSlice({
    name: 'config',
    initialState: INITIAL_STATE,
    reducers: {
        addConfig (state, { payload }: PayloadAction<Config> ) {
            state.push(payload);
        }
    }
})

export default sliceConfig.reducer

export const { addConfig } = sliceConfig.actions

export const useConfig = (state: ConfigState) => {
    return state.config as Config[]
}