import { Stack, Paper, Grid, Alert, Button } from '@mui/material';
import React from 'react';

export const ActionBar: React.FC = () => {
  return (
    <Paper sx={{ p: 3, m: 3 }} elevation={3}>
      <Grid container justifyContent={'space-between'} spacing={1}>
        <Grid item xs={12} sm={8}>
          <Alert severity='info'>This is an info alert — check it out!</Alert>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Stack direction={'row'} justifyContent={'flex-end'}>
            <Button variant='text'>Cancel</Button>
            <Button variant='contained'>Save</Button>
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
};
