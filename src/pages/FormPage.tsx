import { Container, Stack } from '@mui/material';
import React from 'react';
import { ActionBar } from '../components/actionBar';
import { OrganizationDetails } from '../components/organizationDetails';

export const FormPage: React.FC = () => {
  return (
    <Container>
      <Stack spacing={2} justifyContent='center'>
        <ActionBar />
        <OrganizationDetails />
      </Stack>
    </Container>
  );
};
