import React from 'react'
import { ImTwitch } from 'react-icons/im'
import BaseCard from '../../Base/BaseCard'

export default function TwitchCard({ twitchSocialLink = {} }) {
  const { username, url, description } = twitchSocialLink

  return (
    <BaseCard
      username={username}
      url={url}
      description={description}
      jsxIcon={<ImTwitch />}
    />
  )
}
