import { Grid, Container, Stack } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { AddressForm, ContactDetailsForm, OrganizationDetailsForm } from './forms';

export const OrganizationDetails: React.FC = () => {
  const { register } = useFormContext();

  return (
    <Stack sx={{ p: 3 }}>
      <Grid container spacing={2} justifyContent='center'>
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
    </Stack>
  );
};
