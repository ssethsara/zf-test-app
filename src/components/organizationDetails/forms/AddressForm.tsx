import { Paper, Stack, TextField } from '@mui/material';
import { FastField, useFormikContext } from 'formik';
import React, { useMemo } from 'react';
import { OrganizationDetailsType } from '../../../types/organizationDetailsTypes';

export const AddressForm: React.FC = () => {
  const { errors, touched } = useFormikContext<OrganizationDetailsType>();

  const memoizedValues = useMemo(() => {
    return { errors, touched };
  }, [errors, touched]);

  return (
    <>
      {console.count()}
      <Paper sx={{ p: 2, height: '70vh' }} elevation={3} className='AddressForm'>
        <Stack spacing={2} justifyContent='flex-end'>
          <FastField
            label='Street name'
            name='address.streetName'
            as={TextField}
            placeholder='Jack Lane'
            size='small'
            variant='outlined'
            error={
              !!memoizedValues.errors.address?.streetName &&
              !!memoizedValues.touched.address?.streetName
            }
            helperText={
              !!memoizedValues.touched.address?.streetName &&
              memoizedValues.errors.address?.streetName
            }
          />
          <FastField
            label='Street No'
            name='address.streetNumber'
            as={TextField}
            placeholder='123'
            type='number'
            size='small'
            variant='outlined'
            error={
              !!memoizedValues.errors.address?.streetNumber &&
              !!memoizedValues.touched.address?.streetNumber
            }
            helperText={
              !!memoizedValues.touched.address?.streetNumber &&
              memoizedValues.errors.address?.streetNumber
            }
          />
          <FastField
            label='Postal Code'
            name='address.postalCode'
            as={TextField}
            placeholder='12334'
            type='number'
            size='small'
            variant='outlined'
            error={
              !!memoizedValues.errors.address?.postalCode &&
              !!memoizedValues.touched.address?.postalCode
            }
            helperText={
              !!memoizedValues.touched.address?.postalCode &&
              memoizedValues.errors.address?.postalCode
            }
          />
          <FastField
            label='City'
            name='address.city'
            as={TextField}
            placeholder='City'
            size='small'
            variant='outlined'
            error={!!memoizedValues.errors.address?.city && !!memoizedValues.touched.address?.city}
            helperText={
              !!memoizedValues.touched.address?.city && memoizedValues.errors.address?.city
            }
          />
          <FastField
            label='Country'
            name='address.country'
            as={TextField}
            placeholder='country'
            size='small'
            variant='outlined'
            error={
              !!memoizedValues.errors.address?.country && !!memoizedValues.touched.address?.country
            }
            helperText={
              !!memoizedValues.touched.address?.country && memoizedValues.errors.address?.country
            }
          />
        </Stack>
      </Paper>
    </>
  );
};
