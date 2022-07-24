import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const body = req.body
    console.log(body)
  }

  return res.status(500).send({ error: 'Failed to fetch data' })
}
