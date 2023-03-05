import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      return getCurrentTrack(req, res)
    case 'POST':
      return getAccessTokenRes(res)
    default:
      return res.status(405).json({ message: 'Method not allowed' })
  }
}

async function getCurrentTrack(req: NextApiRequest, res: NextApiResponse) {
  const { data } = await getAccessToken()

  const response = await fetch(
    'https://api.spotify.com/v1/me/player/currently-playing',
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer BQDErs11_8MguGBb45TuIGGCwvWnUEYc8jVGFOTLrgdJH_8NkKvtzgRcTDCRXy2NpFmpiyP_Y3ZsS5LGnE5wnHKcp3JC9IYkeMyurj0t-jLuv9l_2Xh_uoXmPv1xNT8001E1RU-aFiy6Bh-GKMi4WGr3M28YUyeOUW4Nhb3bolGcb1cwE37fWp05vLQaaL4dSqiDZDbJxsllySS99924qVIFsnBZJ_BRkmAmQyzbM9DmF_qbMV65rEpOuP-KfMgFw-4bb7QZb2R6TdEOfMuuG0Pe8wSzxVP_hJcI1SZJNdqJqvoSEm1cVWb6SNg`,
        'Content-Type': 'application/json'
      }
    }
  )
  const dataResponse = await response.json()
  console.log(dataResponse)

  return res.status(200).json({
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
