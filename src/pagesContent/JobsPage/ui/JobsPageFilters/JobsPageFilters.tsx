'use client';
import { SearchContext } from '@/shared/lib/context/SearchContext';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Form, Formik } from 'formik';
import { memo, useCallback, useContext } from 'react';
import { useFetchJobsList } from '../../model/hooks/useFetchJobsList/useFetchJobsList';
import { searchValidationSchema } from '../../model/validation/searchValidationSchema';

export const JobsPageFilters = memo(() => {
  const { refetch } = useFetchJobsList();
  const { setSearch } = useContext(SearchContext);

  const handleSubmit = useCallback(() => {
    refetch();
  }, [refetch]);

  return (
    <Formik
      initialValues={{ search: '' }}
      validationSchema={searchValidationSchema}
      onSubmit={handleSubmit}
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
});
