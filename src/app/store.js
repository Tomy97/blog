import { configureStore } from '@reduxjs/toolkit'
import { postReducer } from '../Redux/Reducers/postReducer'

export const store = configureStore({
  reducer: {
    posts: postReducer
  },
})
