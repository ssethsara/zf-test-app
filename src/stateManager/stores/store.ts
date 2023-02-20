import { configureStore } from '@reduxjs/toolkit';
import OrganizationDetailsReducer from '../slices/OrganizationDetailsSlice';

export const store = configureStore({
  reducer: {
    organizationDetails: OrganizationDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
