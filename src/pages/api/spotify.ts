import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  switch (req.method) {
    case 'GET':
      await getCurrentTrack(req, res)
      break
    case 'POST':
      await getAccessTokenRes(res)
      break
    default:
      res.status(405).json({ message: 'Method not allowed' })
      break
  }
}

async function getCurrentTrack(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { data } = await getAccessToken()

  const response = await fetch(
    'https://api.spotify.com/v1/me/player/currently-playing',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${data.access_token}`,
        'Content-Type': 'application/json'
      }
    }
  )
  const dataResponse = await response.json()
  console.log(dataResponse)

  res.status(200).json({
    message: 'Success',
    data: dataResponse
  })
}

async function getAccessToken(): Promise<{
  message: string
  data: {
    access_token: string
    token_type: string
    expires_in: number
  }
}> {
  // const redirectUri: string = process.env.REDIRECT_URI
  const url: string = 'https://accounts.spotify.com/api/token'
  const clientId: string =
    process.env.CLIENT_ID != null ? process.env.CLIENT_ID : ''
  const clientSecret: string =
    process.env.CLIENT_SECRET != null ? process.env.CLIENT_SECRET : ''

  try {
    const response = await axios.post(url, 'grant_type=client_credentials', {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // eslint-disable-next-line n/no-deprecated-api
        Authorization: `Basic ${new Buffer(
          `${clientId}:${clientSecret}`
        ).toString('base64')}`
      }
    })

    return {
      message: 'Success',
      data: response.data
    }
  } catch (error) {
    return {
      message: 'Error',
      data: error
    }
  }
}

async function getAccessTokenRes(res: NextApiResponse): Promise<void> {
  const data = await getAccessToken()
  res.status(200).json(data)
}
