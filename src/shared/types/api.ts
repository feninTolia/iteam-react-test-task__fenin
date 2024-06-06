export interface IApIResponse<T> {
  status: string;
  request_id: string;
  parameters: { num_pages: number; page: number; query: string };
  data: T;
}
