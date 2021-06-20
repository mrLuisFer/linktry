import React from 'react'
import { socialLinks } from '../../_Config/socialLinks'
import FacebookCard from './LinksCards/FacebookCard/FacebookCard'
import LinkedinCard from './LinksCards/LinkedinCard/LinkedinCard'
import TwitchCard from './LinksCards/TwitchCard/TwitchCard'
import TwitterCard from './LinksCards/TwitterCard/TwitterCard'
import RedditCard from './LinksCards/RedditCard/RedditCard'
import GithubCard from './LinksCards/GithubCard/GithubCard'
import BehanceCard from './LinksCards/BehanceCard/BehanceCard'

export default function SocialLinks() {
  return (
    <div className='my-5 px-4 sm:px-0'>
      <TwitterCard twitterSocialLink={socialLinks.twitter} />
      <TwitchCard twitchSocialLink={socialLinks.twitch} />
      <FacebookCard facebookSocialLink={socialLinks.facebook} />
      <LinkedinCard linkedinSocialLink={socialLinks.linkedin} />
      <RedditCard redditSocialLink={socialLinks.reddit} />
      <GithubCard githubSocialLink={socialLinks.github} />
      <BehanceCard behanceSocialLink={socialLinks.behance} />
    </div>
  )
}
