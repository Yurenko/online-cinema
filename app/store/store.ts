import {configureStore} from '@reduxjs/toolkit'
import { redusers } from './rootReduser'
export const store = configureStore({
    reducer: redusers 
})

export type TypeRoottate = ReturnType<typeof store.getState>