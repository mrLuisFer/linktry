import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '~/lib/prisma'
import { getSession } from 'next-auth/react'

interface Link {
  username: string
  url: string
  description: string
  clientId?: string
  id?: string
  author?: any
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, data } = req.body

    if (!email && !data) {
      return res.status(500).send({ error: 'Error sending the data' })
    }

    const session = await getSession({ req })

    if (!session) {
      return res.status(500).send({ error: 'Session not found' })
    }

    for (let i = 0; i < data.length; i++) {
      const link: Link = data[i]
      await prisma.link.create({
        data: {
          username: link.username,
          description: link.description,
          url: link.url,
          author: { connect: { email } }
        }
      })
    }

    return res.status(200).send({ message: 'Data saved in the DataBase' })
  }

  return res.status(500).send({ error: 'Failed to fetch data' })
}
