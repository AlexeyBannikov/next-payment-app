import type { NextApiRequest, NextApiResponse } from 'next';

import { TOperator } from '../../../@types/types';
import { operators } from '../data/operators';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TOperator>,
) {
  const { operatorId } = req.query;

  if (req.method === 'GET') {
    res.status(200).json(operators[Number(operatorId) - 1]);
  }
}
