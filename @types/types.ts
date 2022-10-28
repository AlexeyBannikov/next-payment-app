export type TOperator = {
  id: number;
  name: string;
  icon: string;
};

export enum Status {
  ERROR = 'error',
  SUCCESS = 'success',
}

export type TPaymentResponse = {
  status: Status;
  message: string;
};
