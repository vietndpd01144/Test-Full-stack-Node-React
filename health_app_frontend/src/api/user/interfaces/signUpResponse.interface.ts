export interface SignUpResponse {
  messages: string;
  statusCode: number;
}

export interface SignUpError {
  response: {
    data: {
      statusCode: number;
      messages?: string[];
      message?: string;
    };
  };
}
