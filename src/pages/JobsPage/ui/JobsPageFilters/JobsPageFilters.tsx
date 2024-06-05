'use client';
import { SearchContext } from '@/shared/lib/context/SearchContext';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input/Input';
import { Text } from '@/shared/ui/Text';
import { Form, Formik } from 'formik';
import { useContext } from 'react';
import { useFetchJobsList } from '../../model/hooks/useFetchJobsList/useFetchJobsList';
import { searchValidationSchema } from '../../model/validation/searchValidationSchema';

interface IProps {}

export const JobsPageFilters = (props: IProps) => {
  const { refetch } = useFetchJobsList();
  const { setSearch } = useContext(SearchContext);

  return (
    <Formik
      initialValues={{ search: '' }}
      validationSchema={searchValidationSchema}
      onSubmit={(values, actions) => {
        refetch();
      }}
    >
      <Form>
        <label className="flex flex-col gap-2">
          <Text text="Search by position" />
          <Input
            name="search"
            handleChange={setSearch}
            placeholder="For example: Python developer"
          />
          <Button type="submit" theme={ButtonTheme.OUTLINED}>
            Search
          </Button>
        </label>
      </Form>
    </Formik>
  );
};
