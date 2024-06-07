import { useQuery } from '@tanstack/react-query';
import { fetchJobById } from '../../services/fetchJobById/fetchJobById';
import { QueryKey } from '@/shared/constants/tanstackQuery';

export const useFetchJobById = (id?: string) => {
  const result = useQuery({
    queryKey: [QueryKey.JOB, id],
    queryFn: () => fetchJobById(id),
    enabled: true,
  });

  return result;
};
