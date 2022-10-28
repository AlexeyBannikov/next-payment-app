import type { NextApiRequest, NextApiResponse } from 'next';

import { Status, TPaymentResponse } from '../../../@types/types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TPaymentResponse>,
) {
  const success = () =>
    res.status(200).json({ status: Status.SUCCESS, message: 'Успех' });
  const error = () =>
    res.status(404).json({ status: Status.ERROR, message: 'Ошибка' });
  const arrFunc = [success, error];
  const randFunc = () => {
    arrFunc[Math.floor(Math.random() * arrFunc.length)]();
  };

  if (req.method === 'POST') {
    randFunc();
  }
}
