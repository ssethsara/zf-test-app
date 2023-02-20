import { Paper, TextField, Stack, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import React, { memo } from 'react';
import { Controller, useForm, useFormContext, UseFormReturn } from 'react-hook-form';
import { OrganizationDetailsType } from '../../../types/organizationDetailsTypes';

// React.memo to prevent re-render except isDirty state changed
const NestedInput = memo(
  ({ register, control, formState }: UseFormReturn<OrganizationDetailsType, any>) => (
    <>
      <Paper sx={{ p: 2, height: '70vh' }} elevation={3}>
        <Stack spacing={2} justifyContent='flex-end'>
          <Controller
            control={control}
            name='migrationMode'
            defaultValue={false}
            render={({ field: { value, onChange, onBlur, ref, ...field } }) => (
              <FormControlLabel
                control={<Checkbox onChange={onChange} checked={value} {...field} />}
                label='Migration Mode'
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                ref={ref}
              />
            )}
          />
          <Controller
            control={control}
            name='code'
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
                error={!!formState.errors?.code}
                helperText={formState.errors?.code && formState.errors.code.message}
              />
            )}
          />
          <Controller
            control={control}
            name='description'
            defaultValue=''
            render={({ field }) => (
              <TextField
                {...field}
                size='small'
                variant='outlined'
                label='Description'
                onChange={field.onChange}
                onBlur={field.onBlur}
                value={field.value}
                ref={field.ref}
                error={!!formState.errors?.description}
                helperText={formState.errors?.description && formState.errors.description.message}
              />
            )}
          />
          <Controller
            control={control}
            name='bankAccount'
            defaultValue=''
            render={({ field }) => (
              <TextField
                {...field}
                size='small'
                variant='outlined'
                label='Bank Account'
                onChange={field.onChange}
                onBlur={field.onBlur}
                value={field.value}
                ref={field.ref}
                error={!!formState.errors?.bankAccount}
                helperText={formState.errors?.bankAccount && formState.errors.bankAccount.message}
              />
            )}
          />
          <Controller
            control={control}
            name='vatAccountNumber'
            defaultValue=''
            render={({ field }) => (
              <TextField
                {...field}
                size='small'
                variant='outlined'
                label='VAT No'
                onChange={field.onChange}
                onBlur={field.onBlur}
                value={field.value}
                ref={field.ref}
                error={!!formState.errors?.vatAccountNumber}
                helperText={
                  formState.errors?.vatAccountNumber && formState.errors.vatAccountNumber.message
                }
              />
            )}
          />
          <Controller
            control={control}
            name='companyAccountNumber'
            defaultValue=''
            render={({ field }) => (
              <TextField
                {...field}
                size='small'
                variant='outlined'
                label='Company Account No'
                onChange={field.onChange}
                onBlur={field.onBlur}
                value={field.value}
                ref={field.ref}
                error={!!formState.errors?.companyAccountNumber}
                helperText={
                  formState.errors?.companyAccountNumber &&
                  formState.errors.companyAccountNumber.message
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

export const OrganizationDetailsForm: React.FC = () => {
  const methods = useFormContext<OrganizationDetailsType>();
  return <NestedInput {...methods} />;
};
