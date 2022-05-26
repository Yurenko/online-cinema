import { configureStore } from '@reduxjs/toolkit'

import { redusers } from './rootReduser'

export const store = configureStore({
	reducer: redusers,
})

export type TypeRootState = ReturnType<typeof store.getState>
