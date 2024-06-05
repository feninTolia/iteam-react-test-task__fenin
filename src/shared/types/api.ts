export interface IApIResponse<T> {
  status: string;
  request_id: string;
  parameters: {};
  data: T;
}
