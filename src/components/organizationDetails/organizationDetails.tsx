import { Grid, Container } from '@mui/material';
import React from 'react';
import { AddressForm, ContactDetailsForm, OrganizationDetailsForm } from './forms';

export const OrganizationDetails: React.FC = () => {
  return (
    <Container sx={{ p: 3, m: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4}>
          <OrganizationDetailsForm />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <ContactDetailsForm />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <AddressForm />
        </Grid>
      </Grid>
    </Container>
  );
};
