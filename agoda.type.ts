export type AgodaServiceConfig = {
  apiKey: string;
  baseUrl?: string;
};

export interface IBaseResponse<Response> {
  data: Response;
  status: boolean;
  meta: Meta;
  message: string;
}
export interface Meta {
  currentPage: number;
  limit: number;
  totalRecords: number;
  totalPage: number;
}
