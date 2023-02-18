import { Checkbox, FormControlLabel, Paper, Stack, TextField } from '@mui/material';
import React from 'react';

export const ContactDetailsForm: React.FC = () => {
  return (
    <Paper sx={{ p: 2, height: '50vh' }} elevation={3} className='ContactDetailsForm'>
      <Stack spacing={2} justifyContent='flex-end'>
        <TextField
          label='Email Address'
          id='emailAddress'
          placeholder='jhon@zf.com'
          size='small'
          type={'email'}
          variant='outlined'
        />
        <TextField
          label='Telephone No'
          id='telephone'
          placeholder='92111029'
          size='small'
          variant='outlined'
        />
        <TextField
          label='Website'
          id='website'
          placeholder='www.jhondoe.com'
          size='small'
          variant='outlined'
        />
      </Stack>
    </Paper>
  );
};
