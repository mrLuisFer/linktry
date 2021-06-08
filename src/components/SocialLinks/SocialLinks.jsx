import React from 'react'
import { socialLinks } from '../../_Config/socialLinks'
import TwitterCard from './LinksCards/TwitterCard/TwitterCard'

export default function SocialLinks() {
  return (
    <div className='mt-5 px-4'>
      <TwitterCard twitterSocialLink={socialLinks.twitter} />
    </div>
  )
}
