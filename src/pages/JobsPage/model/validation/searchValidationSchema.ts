import * as Yup from 'yup';

export const searchValidationSchema = Yup.object({
  search: Yup.string()
    .min(2, 'Minimum 2 characters')
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
});
