import { useQuery } from '@tanstack/react-query';
import { fetchJobsList } from '../../services/fetchJobsList/fetchJobsList';

export const useFetchJobsList = () => {
  const result = useQuery({
    queryKey: ['jobs-list'],
    queryFn: fetchJobsList,
    enabled: false,
  });

  return result;
};
