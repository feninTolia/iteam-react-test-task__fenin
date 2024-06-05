import { IJob } from '@/entities/Job';
import { $api } from '@/shared/api/api';
import { IApIResponse } from '@/shared/types/api';

export const fetchJobById = async (id?: string) => {
  try {
    if (!id) {
      throw new Error('ID is not provided');
    }

    const response = await $api.get<IApIResponse<IJob[]>>('/job-details', {
      params: {
        job_id: id,
        extended_publisher_details: 'true',
      },
    });

    if (!response.data.data) {
      throw new Error('Job not found');
    }

    return response.data.data.at(0);
  } catch (error) {
    console.error(error);
  }
};
