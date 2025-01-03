export type APIErrorResponse = {
  errorType?: string;
  message?: string;
  details?: [
    {
      property: string;
      value: string;
      messages: string[];
    }
  ];
};

export type APIRequestStatus = {
  loading: boolean;
  error?: string | null;
  validationErrors?: Record<string, string>;
};
