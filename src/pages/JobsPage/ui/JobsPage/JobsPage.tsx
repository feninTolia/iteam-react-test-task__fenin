'use client';
import { JobList } from '@/entities/Job';
import { jobMock } from '@/shared/mocks/job';
import { Text, TextSize } from '@/shared/ui/Text';
import { Page } from '@/shared/widgets/Page';
import { useFetchJobsList } from '../../model/hooks/useFetchJobsList/useFetchJobsList';
import { JobsPageFilters } from '../JobsPageFilters/JobsPageFilters';

export const JobsPage = () => {
  const { data: jobs, isLoading } = useFetchJobsList();

  return (
    <Page>
      <Text
        className="text-2xl mb-4 text-white"
        title="Jobs on Site"
        size={TextSize.XXXL}
      />
      <div className="flex gap-8">
        <div>
          {isLoading && <p>Loading...</p>}

          {jobs && <JobList jobs={jobs} />}

          {!jobs && (
            <JobList
              jobs={[
                { ...jobMock, job_id: '1' },
                { ...jobMock, job_id: '2' },
                { ...jobMock, job_id: '43' },
              ]}
            />
          )}
        </div>

        <JobsPageFilters />
      </div>
    </Page>
  );
};
