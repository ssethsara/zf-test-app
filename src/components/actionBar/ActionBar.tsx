import { Stack, Paper, Grid, Alert, Button } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import React, { useCallback } from 'react';
import { OrganizationDetailsType } from '../../types/organizationDetailsTypes';

interface ActionBarProp {
  submitted: boolean;
}

export const ActionBar: React.FC<ActionBarProp> = (props: ActionBarProp) => {
  const {
    formState: { isValid, errors, isDirty, isSubmitSuccessful },
    reset,
  } = useFormContext<OrganizationDetailsType>();

  const alartMessage = useCallback(() => {
    if (isDirty && !isValid) {
      return <Alert severity='error'>Please complete the form</Alert>;
    }
    if (isSubmitSuccessful) {
      return <Alert severity='success'>Form is submitted</Alert>;
    } else {
      return <Alert severity='info'>Please fill the form and save it</Alert>;
    }
  }, [isDirty, isValid, props]);

  return (
    <Paper sx={{ p: 3, m: 3 }} elevation={3}>
      <Grid container justifyContent={'space-between'} spacing={1}>
        <Grid item xs={12} sm={8}>
          {alartMessage()}
        </Grid>
        <Grid item xs={12} sm={4}>
          <Stack direction={'row'} justifyContent={'flex-end'}>
            {isDirty && (
              <Button variant='text' onClick={() => reset()}>
                Cancel
              </Button>
            )}
            <Button
              type='submit'
              variant='contained'
              color='primary'
              size='large'
              disabled={!isValid || !isDirty}
            >
              Save
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};
