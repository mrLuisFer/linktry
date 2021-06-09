import React from 'react'
import { socialLinks } from '../../_Config/socialLinks'
import TwitchCard from './LinksCards/TwitchCard/TwitchCard'
import TwitterCard from './LinksCards/TwitterCard/TwitterCard'

export default function SocialLinks() {
  return (
    <div className='mt-5 px-4'>
      <TwitterCard twitterSocialLink={socialLinks.twitter} />
      <TwitchCard twitchSocialLink={socialLinks.twitch} />
    </div>
  )
}
