'use client';
import { JobList } from '@/entities/Job';
import { IProfile } from '@/entities/Profile';
import { getProfileFromLS } from '@/shared/lib/helpers/getProfileFromLS';
import { Text, TextSize } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';
import { memo, useEffect, useState } from 'react';
import { useFetchJobsList } from '../../model/hooks/useFetchJobsList/useFetchJobsList';
import { useFetchRecommendedJobsList } from '../../model/hooks/useFetchRecommendedJobsList/useFetchRecommendedJobsList';
import { JobsPageFilters } from '../JobsPageFilters/JobsPageFilters';

const JobsPage = memo(() => {
  const [profile, setProfile] = useState<IProfile>();

  const { data: jobs, isLoading: isJobsLoading } = useFetchJobsList();

  const {
    data: recommendedJobs,
    isLoading: isRecommendedLoading,
    refetch,
  } = useFetchRecommendedJobsList(profile?.desiredJob);

  useEffect(() => {
    const result = getProfileFromLS();
    setProfile(result);
    refetch(); // ????
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isLoading = isJobsLoading || isRecommendedLoading;

  return (
    <Page>
      <Text
        className="text-2xl mb-4 text-white"
        title="Jobs on Site"
        size={TextSize.XXXL}
      />
      <div className="flex gap-8 justify-between">
        <div>
          {isLoading && <Text text="Loading..." />}

          {!jobs && !recommendedJobs && !isLoading && (
            <Text
              text="There are no jobs recommended for you yet! Either start a keyword search or fill in the information about the job you want in your profile!"
              size={TextSize.XXL}
            />
          )}

          {(jobs || recommendedJobs) && (
            <JobList jobs={jobs ?? recommendedJobs} />
          )}

          {/* {!jobs && (
            <JobList
              jobs={[
                { ...jobMock, job_id: '1' },
                { ...jobMock, job_id: '2' },
                { ...jobMock, job_id: '43' },
              ]}
            />
          )} */}
        </div>

        <JobsPageFilters />
      </div>
    </Page>
  );
});

export default JobsPage;
