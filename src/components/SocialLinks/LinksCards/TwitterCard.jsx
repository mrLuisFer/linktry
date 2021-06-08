import React from 'react'
import BaseCard from '../Base/BaseCard'
import { SiTwitter } from 'react-icons/si'
import './twitterHover.css'

export default function TwitterCard({
  username = '',
  url = '',
  description = '',
}) {
  return (
    <BaseCard
      username={username}
      url={url}
      description={description}
      jsxIcon={<SiTwitter />}
      customCardClasses='twitterCard bg-blue-200 dark:bg-blue-500 dark:bg-opacity-20'
      customIconClasses='hover:text-twitterColor'
    />
  )
}
