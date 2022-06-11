import { socialLinks } from '../../apiData/socialLinks'
import FacebookCard from './LinksCards/FacebookCard'
import LinkedinCard from './LinksCards/LinkedinCard'
import TwitchCard from './LinksCards/TwitchCard'
import TwitterCard from './LinksCards/TwitterCard'
import RedditCard from './LinksCards/RedditCard'
import GithubCard from './LinksCards/GithubCard'
import BehanceCard from './LinksCards/BehanceCard'
import InstagramCard from './LinksCards/InstagramCard'
import PortfolioCard from './LinksCards/PortfolioCard'
import CvCard from './LinksCards/CvCard'

export default function SocialLinks() {
  return (
    <section className='my-5 px-4 sm:px-0'>
      <PortfolioCard portfolioSocialLink={socialLinks.portfolio} />
      <LinkedinCard linkedinSocialLink={socialLinks.linkedin} />
      <GithubCard githubSocialLink={socialLinks.github} />
      <TwitterCard twitterSocialLink={socialLinks.twitter} />
      <BehanceCard behanceSocialLink={socialLinks.behance} />
      <FacebookCard facebookSocialLink={socialLinks.facebook} />
      <RedditCard redditSocialLink={socialLinks.reddit} />
      <TwitchCard twitchSocialLink={socialLinks.twitch} />
      <InstagramCard instagramSocialLink={socialLinks.instagram} />
      <CvCard cvSocialLink={socialLinks.cv} />
    </section>
  )
}
