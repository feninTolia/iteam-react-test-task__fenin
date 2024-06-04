import { JobDetailsPage } from '@/pages/JobDetailsPage';

interface IProps {
  params: { id: string };
}

const JobDetails = ({ params }: IProps) => {
  return <JobDetailsPage />;
};

export default JobDetails;
