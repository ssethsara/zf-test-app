import { Container, Stack } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { ActionBar } from '../components/actionBar';
import { OrganizationDetails } from '../components/organizationDetails';
import { RootState } from '../stateManager/stores/store';
import { OrganizationDetailsType } from '../types/organizationDetailsTypes';
import { yupResolver } from '@hookform/resolvers/yup';
import { orgDetailsValidationSchema } from '../formValidations/FormValidations';
import { addDetails } from '../stateManager/slices/OrganizationDetailsSlice';

export const FormPage: React.FC = () => {
  const organizationDetails = useSelector((state: RootState) => state.organizationDetails);
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const methods = useForm<OrganizationDetailsType>({
    resolver: yupResolver(orgDetailsValidationSchema),
    mode: 'onChange',
    defaultValues: organizationDetails,
  });

  const onSubmitHandler = useCallback((data: FieldValues) => {
    dispatch(addDetails(data as OrganizationDetailsType));
    setFormSubmitted(true);
    methods.reset(data);
  }, []);

  return (
    <Container>
      <Stack spacing={2} justifyContent='center'>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmitHandler)}>
            <ActionBar submitted={formSubmitted} />
            <OrganizationDetails />
          </form>
        </FormProvider>
      </Stack>
    </Container>
  );
};
