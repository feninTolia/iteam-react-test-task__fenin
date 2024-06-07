import { IJob } from '@/entities/Job';
import { $api } from '@/shared/api/api';
import { IApIResponse } from '@/shared/types/api';

export const fetchJobsList = async (search?: string) => {
  try {
    const response = await $api.get<IApIResponse<IJob[]>>('/search', {
      params: {
        query: search ?? ' ',
        num_pages: 1,
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
