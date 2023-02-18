import { Checkbox, FormControlLabel, Paper, Stack, TextField } from '@mui/material';
import React from 'react';

export const AddressForm: React.FC = () => {
  return (
    <Paper sx={{ p: 2, height: '50vh' }} elevation={3} className='AddressForm'>
      <Stack spacing={2} justifyContent='flex-end'>
        <TextField
          label='Street name'
          id='streetName'
          placeholder='Jack Lane'
          size='small'
          variant='outlined'
        />
        <TextField
          label='Street No'
          id='streetNo'
          placeholder='123'
          size='small'
          type='number'
          variant='outlined'
        />
        <TextField
          label='Postal Code'
          id='postalCode'
          placeholder='12334'
          size='small'
          type='number'
          variant='outlined'
        />
        <TextField label='City' id='city' placeholder='City' size='small' variant='outlined' />
        <TextField
          label='Country'
          id='country'
          placeholder='country'
          size='small'
          variant='outlined'
        />
      </Stack>
    </Paper>
  );
};
