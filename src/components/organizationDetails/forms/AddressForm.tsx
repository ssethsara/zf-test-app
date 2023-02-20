import { Paper, Stack, TextField, Typography } from '@mui/material';
import { memo } from 'react';
import { Controller, useFormContext, UseFormReturn } from 'react-hook-form';
import { OrganizationDetailsType } from '../../../types/organizationDetailsTypes';

// React.memo to prevent re-render except isDirty state changed
const NestedInput = memo(
  ({ register, control, formState }: UseFormReturn<OrganizationDetailsType, any>) => (
    <>
      <Paper sx={{ p: 2, height: '70vh' }} elevation={3} className='AddressForm'>
        <Stack spacing={2} justifyContent='flex-end'>
          <Controller
            control={control}
            name='address.streetName'
            defaultValue=''
            render={({ field }) => (
              <TextField
                {...field}
                size='small'
                variant='outlined'
                label='Street name'
                onChange={field.onChange}
                onBlur={field.onBlur}
                value={field.value}
                ref={field.ref}
                error={!!formState.errors?.address?.streetName}
                helperText={
                  formState.errors?.address?.streetName &&
                  formState.errors.address?.streetName.message
                }
              />
            )}
          />
          <Controller
            control={control}
            name='address.streetNumber'
            defaultValue=''
            render={({ field }) => (
              <TextField
                {...field}
                size='small'
                variant='outlined'
                label='Street Number'
                onChange={field.onChange}
                onBlur={field.onBlur}
                value={field.value}
                ref={field.ref}
                error={!!formState.errors?.address?.streetNumber}
                helperText={
                  formState.errors?.address?.streetNumber &&
                  formState.errors.address?.streetNumber.message
                }
              />
            )}
          />
          <Controller
            control={control}
            name='address.postalCode'
            defaultValue=''
            render={({ field }) => (
              <TextField
                {...field}
                size='small'
                variant='outlined'
                label='Postal code'
                onChange={field.onChange}
                onBlur={field.onBlur}
                value={field.value}
                ref={field.ref}
                error={!!formState.errors?.address?.postalCode}
                helperText={
                  formState.errors?.address?.postalCode &&
                  formState.errors.address?.postalCode.message
                }
              />
            )}
          />
          <Controller
            control={control}
            name='address.city'
            defaultValue=''
            render={({ field }) => (
              <TextField
                {...field}
                size='small'
                variant='outlined'
                label='City'
                onChange={field.onChange}
                onBlur={field.onBlur}
                value={field.value}
                ref={field.ref}
                error={!!formState.errors?.address?.city}
                helperText={
                  formState.errors?.address?.city && formState.errors.address?.city.message
                }
              />
            )}
          />

          <Controller
            control={control}
            name='address.country'
            defaultValue=''
            render={({ field }) => (
              <TextField
                {...field}
                size='small'
                variant='outlined'
                label='Country'
                onChange={field.onChange}
                onBlur={field.onBlur}
                value={field.value}
                ref={field.ref}
                error={!!formState.errors?.address?.country}
                helperText={
                  formState.errors?.address?.country && formState.errors.address?.country.message
                }
              />
            )}
          />
        </Stack>
      </Paper>
    </>
  ),
  (prevProps, nextProps) => prevProps.formState.isDirty === nextProps.formState.isDirty,
);

NestedInput.displayName = 'NestedInput';

export const AddressForm: React.FC = () => {
  const methods = useFormContext<OrganizationDetailsType>();

  return <NestedInput {...methods} />;
};
