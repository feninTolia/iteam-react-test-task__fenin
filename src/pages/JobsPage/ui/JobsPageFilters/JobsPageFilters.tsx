'use client';
import { SearchContext } from '@/shared/lib/context/SearchContext';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Form, Formik } from 'formik';
import { useContext } from 'react';
import { useFetchJobsList } from '../../model/hooks/useFetchJobsList/useFetchJobsList';
import { searchValidationSchema } from '../../model/validation/searchValidationSchema';

export const JobsPageFilters = () => {
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
        <div className="flex flex-col gap-2">
          <Input
            name="search"
            label="Search by position"
            handleChange={setSearch}
            placeholder="For example: Python developer"
          />
          <Button type="submit" theme={ButtonTheme.OUTLINED}>
            Search
          </Button>
        </div>
      </Form>
    </Formik>
  );
};
