import { Container, Stack } from '@mui/material';
import { Formik, Form, FormikHelpers } from 'formik';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ActionBar } from '../components/actionBar';
import { OrganizationDetails } from '../components/organizationDetails';
import { orgDetailsValidationSchema } from '../formValidations/FormValidations';
import { addDetails } from '../stateManager/slices/OrganizationDetailsSlice';
import { RootState } from '../stateManager/stores/store';
import { OrganizationDetailsType } from '../types/organizationDetailsTypes';

export const FormPage: React.FC = () => {
  const organizationDetails = useSelector((state: RootState) => state.organizationDetails);
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleSubmit = useCallback(
    (values: OrganizationDetailsType, formHelper: FormikHelpers<OrganizationDetailsType>) => {
      dispatch(addDetails(values));
      setFormSubmitted(true);
      formHelper.resetForm({ values: values });
    },
    [],
  );

  return (
    <Container>
      <Stack spacing={2} justifyContent='center'>
        <Formik
          initialValues={organizationDetails}
          validationSchema={orgDetailsValidationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
              <ActionBar submitted={formSubmitted} />
              <OrganizationDetails />
            </Form>
          )}
        </Formik>
      </Stack>
    </Container>
  );
};
