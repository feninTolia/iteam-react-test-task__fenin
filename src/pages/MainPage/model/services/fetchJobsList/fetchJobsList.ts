import { $api } from '@/shared/api/api';
import { IJob } from '../../types';

interface IApIResponse<T> {
  status: string;
  request_id: string;
  parameters: {};
  data: T;
}

export const fetchJobsList = async () => {
  try {
    const response = await $api.get<IApIResponse<IJob[]>>('/search', {
      params: {
        query: 'Python developer in Texas, USA',
      },
    });

    if (!response.data.data) {
      throw new Error('No jobs found');
    }

    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
