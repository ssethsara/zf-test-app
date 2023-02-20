import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrganizationDetailsType } from '../../types/organizationDetailsTypes';
// import type { PayloadAction } from '@reduxjs/toolkit';

export interface OrganizationDetailsState {
  value: number;
}

const initialState: OrganizationDetailsType = {
  migrationMode: false,
  code: '',
  description: '',
  bankAccount: '',
  vatAccountNumber: '',
  companyAccountNumber: '',
  contactDetails: {
    emailAddress: '',
    telephone: '',
    website: '',
  },
  address: {
    streetName: '',
    streetNumber: '',
    postalCode: '',
    city: '',
    country: '',
  },
};

export const OrganizationDetailsSlice = createSlice({
  name: 'organizationDetails',
  initialState,
  reducers: {
    addDetails: (state, action: PayloadAction<OrganizationDetailsType>) => {
      Object.assign(state, action.payload);
    },

    changeMigration: (state, action: PayloadAction<boolean>) => {
      state.migrationMode = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addDetails, changeMigration } = OrganizationDetailsSlice.actions;

export default OrganizationDetailsSlice.reducer;
