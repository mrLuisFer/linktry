import React from 'react'
import { socialLinks } from '../../_Config/socialLinks'
import TwitterCard from './LinksCards/TwitterCard'

export default function SocialLinks() {
  const { username, url, description } = socialLinks.twitter

  return (
    <div className='mt-5 px-4'>
      <TwitterCard username={username} url={url} description={description} />
    </div>
  )
}
