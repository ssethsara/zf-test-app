import * as yup from 'yup';

export const orgDetailsValidationSchema = yup.object().shape({
  migrationMode: yup.boolean().required().label('Migration Mode'),
  code: yup.string().max(16).required().label('Code'),
  description: yup.string().max(16).required().label('Description'),
  bankAccount: yup.string().max(16).required().label('Bank account'),
  vatAccountNumber: yup.string().max(16).required().label('VAT account number'),
  companyAccountNumber: yup.string().max(16).required().label('Company account number'),
  contactDetails: yup.object({
    emailAddress: yup.string().email().max(16).required().label('Email address'),
    telephone: yup
      .number()
      .typeError('A number is required')
      .test('len', 'Telephone number is not validated', (val) => val?.toString()?.length === 11)
      .required()
      .label('Telephone no'),
    website: yup.string().max(16).required().label('Website'),
  }),
  address: yup.object({
    streetName: yup.string().max(16).required().label('Street name'),
    streetNumber: yup.number().required().label('Street number'),
    postalCode: yup.number().required().label('Postal code'),
    city: yup.string().max(16).required().label('City'),
    country: yup.string().max(16).required().label('Country'),
  }),
});
