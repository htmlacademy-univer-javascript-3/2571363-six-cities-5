import { combineReducers, configureStore } from '@reduxjs/toolkit';
import offersSlice from './offersSlice';
import { api } from '@services/index';

const rootReducer = combineReducers({
  offersSlice,
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
