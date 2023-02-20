import { Paper, Stack, TextField } from '@mui/material';
import { FastField, useFormikContext } from 'formik';
import React, { useMemo } from 'react';
import { OrganizationDetailsType } from '../../../types/organizationDetailsTypes';

export const ContactDetailsForm: React.FC = () => {
  const { errors, touched } = useFormikContext<OrganizationDetailsType>();

  const memoizedValues = useMemo(() => {
    return { errors, touched };
  }, [errors, touched]);

  return (
    <Paper sx={{ p: 2, height: '70vh' }} elevation={3} className='ContactDetailsForm'>
      <Stack spacing={2} justifyContent='flex-end'>
        <FastField
          label='Email Address'
          name='contactDetails.emailAddress'
          as={TextField}
          placeholder='jhon@zf.com'
          size='small'
          type={'email'}
          variant='outlined'
          error={
            memoizedValues.errors.contactDetails?.emailAddress &&
            !!memoizedValues.touched.contactDetails?.emailAddress
          }
          helperText={
            !!memoizedValues.touched.contactDetails?.emailAddress &&
            memoizedValues.errors.contactDetails?.emailAddress
          }
        />
        <FastField
          label='Telephone No'
          name='contactDetails.telephone'
          as={TextField}
          placeholder='92111029'
          size='small'
          variant='outlined'
          error={
            memoizedValues.errors.contactDetails?.telephone &&
            !!memoizedValues.touched.contactDetails?.telephone
          }
          helperText={
            !!memoizedValues.touched.contactDetails?.telephone &&
            memoizedValues.errors.contactDetails?.telephone
          }
        />
        <FastField
          label='Website'
          name='contactDetails.website'
          as={TextField}
          placeholder='www.jhondoe.com'
          size='small'
          variant='outlined'
          error={
            memoizedValues.errors.contactDetails?.website &&
            !!memoizedValues.touched.contactDetails?.website
          }
          helperText={
            !!memoizedValues.touched.contactDetails?.website &&
            memoizedValues.errors.contactDetails?.website
          }
        />
      </Stack>
    </Paper>
  );
};
