import React from 'react'
import BaseCard from '../../Base/BaseCard'
import { FaLinkedinIn } from 'react-icons/fa'

import './linkedinCard.css'

export default function LinkedinCard({ linkedinSocialLink }) {
  const { username, url, description } = linkedinSocialLink

  return (
    <BaseCard
      username={username}
      url={url}
      description={description}
      jsxIcon={<FaLinkedinIn />}
      customCardClasses='linkedinCard bg-gradient-to-l from-blue-400 to-indigo-300 dark:to-indigo-500 dark:from-blue-500'
    />
  )
}
