import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'
import { userApi } from './services/user'
import { formApi } from './services/form'

export const store = configureStore({
  reducer: {
    counter: counterReducer,

    [userApi.reducerPath]: userApi.reducer,
    [formApi.reducerPath]: formApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware,formApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch