import { useQuery } from '@tanstack/react-query';
import { fetchJobById } from '../../services/fetchJobById/fetchJobById';

export const useFetchJobById = (id?: string) => {
  const result = useQuery({
    queryKey: [id],
    queryFn: () => fetchJobById(id),
    enabled: true,
  });

  return result;
};
