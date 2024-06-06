import * as Yup from 'yup';

export const searchValidationSchema = Yup.object({
  search: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(60, 'Must be 60 characters or less')
    .required('Required'),
});
