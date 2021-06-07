import React from 'react'
import BaseCard from './Base/BaseCard'
import { socialLinks } from '../../_Config/socialLinks'

export default function SocialLinks() {
  const { username, url, description } = socialLinks.twitter

  return (
    <div className='mt-5 px-4'>
      <BaseCard username={username} url={url} description={description} />
    </div>
  )
}
