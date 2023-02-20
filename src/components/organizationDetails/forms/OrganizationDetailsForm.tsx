import { Paper, TextField, Stack, FormControlLabel, Checkbox } from '@mui/material';
import { FastField, useFormikContext } from 'formik';
import React, { useMemo } from 'react';
import { OrganizationDetailsType } from '../../../types/organizationDetailsTypes';

export const OrganizationDetailsForm: React.FC = () => {
  const { errors, touched } = useFormikContext<OrganizationDetailsType>();

  const memoizedValues = useMemo(() => {
    return { errors, touched };
  }, [errors, touched]);

  return (
    <Paper sx={{ p: 2, height: '70vh' }} elevation={3}>
      <Stack spacing={2} justifyContent='flex-end'>
        <FormControlLabel
          control={
            <FastField
              name='migrationMode'
              as={Checkbox}
              variant='outlined'
              error={memoizedValues.errors.migrationMode && !!memoizedValues.touched.migrationMode}
            />
          }
          label='Migration Mode'
        />
        <FastField
          label='Code'
          name='code'
          as={TextField}
          placeholder='123'
          size='small'
          variant='outlined'
          error={memoizedValues.errors.code && !!memoizedValues.touched.code}
          helperText={!!memoizedValues.touched.code && memoizedValues.errors.code}
        />
        <FastField
          label='Description'
          name='description'
          as={TextField}
          size='small'
          variant='outlined'
          error={memoizedValues.errors.description && !!memoizedValues.touched.description}
          helperText={!!memoizedValues.touched.description && memoizedValues.errors.description}
        />
        <FastField
          label='Bank Account No'
          name='bankAccount'
          as={TextField}
          placeholder='123'
          size='small'
          variant='outlined'
          error={memoizedValues.errors.bankAccount && !!memoizedValues.touched.bankAccount}
          helperText={!!memoizedValues.touched.bankAccount && memoizedValues.errors.bankAccount}
        />
        <FastField
          label='VAT No'
          name='vatAccountNumber'
          as={TextField}
          placeholder='123'
          size='small'
          variant='outlined'
          error={
            memoizedValues.errors.vatAccountNumber && !!memoizedValues.touched.vatAccountNumber
          }
          helperText={
            !!memoizedValues.touched.vatAccountNumber && memoizedValues.errors.vatAccountNumber
          }
        />
        <FastField
          label='Company Account No'
          name='companyAccountNumber'
          as={TextField}
          placeholder='123'
          size='small'
          variant='outlined'
          error={
            memoizedValues.errors.companyAccountNumber &&
            !!memoizedValues.touched.companyAccountNumber
          }
          helperText={
            !!memoizedValues.touched.companyAccountNumber &&
            memoizedValues.errors.companyAccountNumber
          }
        />
      </Stack>
    </Paper>
  );
};
