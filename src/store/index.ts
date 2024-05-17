import { configureStore } from '@reduxjs/toolkit'
// import usersReducer from 'store/slice/usersSlice'
import { usersApi } from 'store/service/usersApi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  //reducer: Reducer
  reducer: {
    //users: usersReducer
    [usersApi.reducerPath]: usersApi.reducer,
  },
})

setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself
//export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
//export type AppDispatch = typeof store.dispatch