import { Action } from 'redux';
import { ThunkAction } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIErrorResponse } from '@services/index';
import { store } from '.';

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type ThunkExtraArgs = {
  api: AxiosInstance;
};

export type AsyncThunkConfig<RejectType = APIErrorResponse> = {
  state: RootState;
  dispatch: AppDispatch;
  rejectValue: RejectType;
  extra: ThunkExtraArgs;
};

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  ThunkExtraArgs,
  Action
>;
