import { Paper, TextField, Stack, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import React from 'react';

export const OrganizationDetailsForm: React.FC = () => {
  return (
    <Paper sx={{ p: 2, height: '50vh' }} elevation={3}>
      <Stack spacing={2} justifyContent='flex-end'>
        <FormControlLabel control={<Checkbox name='migrationMode' />} label='Migration Mode' />
        <TextField label='Code' id='code' placeholder='123' size='small' variant='outlined' />
        <TextField label='Description' id='description' size='small' variant='outlined' />
        <TextField
          label='Bank Account No'
          id='bankAccount'
          placeholder='123'
          size='small'
          variant='outlined'
        />
        <TextField
          label='VAT No'
          id='vatAccountNumber'
          placeholder='123'
          size='small'
          variant='outlined'
        />
        <TextField
          label='Company Account No'
          id='companyAccountNumber'
          placeholder='123'
          size='small'
          variant='outlined'
        />
      </Stack>
    </Paper>
  );
};
