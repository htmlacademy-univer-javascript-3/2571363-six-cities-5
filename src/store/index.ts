import { combineReducers, configureStore } from '@reduxjs/toolkit';
import offersSlice from './offersSlice';
import userSlice from './userSlice';
import offerSlice from './offerSlice';
import { api } from '@services/index';

const rootReducer = combineReducers({
  offersSlice,
  userSlice,
  offerSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { api },
      },
    }),
});
