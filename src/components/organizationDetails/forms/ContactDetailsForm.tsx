import { Checkbox, FormControlLabel, Paper, Stack, TextField } from '@mui/material';
import React, { memo } from 'react';
import { Controller, useFormContext, UseFormReturn } from 'react-hook-form';
import { OrganizationDetailsType } from '../../../types/organizationDetailsTypes';

// React.memo to prevent re-render except isDirty state changed
const NestedInput = memo(
  ({ register, control, formState }: UseFormReturn<OrganizationDetailsType, any>) => (
    <>
      <Paper sx={{ p: 2, height: '70vh' }} elevation={3} className='ContactDetailsForm'>
        <Stack spacing={2} justifyContent='flex-end'>
          <Controller
            control={control}
            name='contactDetails.emailAddress'
            defaultValue=''
            render={({ field }) => (
              <TextField
                {...field}
                size='small'
                variant='outlined'
                label='Code'
                onChange={field.onChange}
                onBlur={field.onBlur}
                value={field.value}
                ref={field.ref}
                error={!!formState.errors?.contactDetails?.emailAddress}
                helperText={
                  formState.errors?.contactDetails?.emailAddress &&
                  formState.errors.contactDetails.emailAddress.message
                }
              />
            )}
          />
          <Controller
            control={control}
            name='contactDetails.telephone'
            defaultValue=''
            render={({ field }) => (
              <TextField
                {...field}
                size='small'
                variant='outlined'
                label='Telephone No'
                onChange={field.onChange}
                onBlur={field.onBlur}
                value={field.value}
                ref={field.ref}
                error={!!formState.errors?.contactDetails?.telephone}
                helperText={
                  formState.errors?.contactDetails?.telephone &&
                  formState.errors.contactDetails.telephone.message
                }
              />
            )}
          />
          <Controller
            control={control}
            name='contactDetails.website'
            defaultValue=''
            render={({ field }) => (
              <TextField
                {...field}
                size='small'
                variant='outlined'
                label='Website'
                onChange={field.onChange}
                onBlur={field.onBlur}
                value={field.value}
                ref={field.ref}
                error={!!formState.errors?.contactDetails?.website}
                helperText={
                  formState.errors?.contactDetails?.website &&
                  formState.errors.contactDetails.website.message
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

export const ContactDetailsForm: React.FC = () => {
  const methods = useFormContext<OrganizationDetailsType>();
  return <NestedInput {...methods} />;
};
