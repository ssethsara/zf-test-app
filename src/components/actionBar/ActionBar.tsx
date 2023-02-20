import { Stack, Paper, Grid, Alert, Button } from '@mui/material';
import { useFormikContext } from 'formik';
import React, { useCallback } from 'react';
import { OrganizationDetailsType } from '../../types/organizationDetailsTypes';

interface ActionBarProp {
  submitted: boolean;
}

export const ActionBar: React.FC<ActionBarProp> = (props: ActionBarProp) => {
  const { isValid, errors, dirty } = useFormikContext<OrganizationDetailsType>();

  const alartMessage = useCallback(() => {
    if (dirty && !isValid) {
      return <Alert severity='error'>Please complete the form</Alert>;
    }
    if (props.submitted) {
      return <Alert severity='success'>Form is submitted</Alert>;
    } else {
      return <Alert severity='info'>Please fill the form and save it</Alert>;
    }
  }, [dirty, errors, isValid, props]);

  return (
    <Paper sx={{ p: 3, m: 3 }} elevation={3}>
      <Grid container justifyContent={'space-between'} spacing={1}>
        <Grid item xs={12} sm={8}>
          {alartMessage()}
        </Grid>
        <Grid item xs={12} sm={4}>
          <Stack direction={'row'} justifyContent={'flex-end'}>
            {dirty && (
              <Button variant='text' type='reset'>
                Cancel
              </Button>
            )}
            <Button
              type='submit'
              variant='contained'
              color='primary'
              size='large'
              disabled={!isValid || !dirty}
            >
              Save
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};
