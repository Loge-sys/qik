/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Config {
    bannerImage: string;
    backgroundColour: string;
    primaryColour: string;
    primaryColourHover: string;
    navBackgroundColour: string;
}

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

export const useConfig = (state: any) => {
    return state.config as Config[]
}