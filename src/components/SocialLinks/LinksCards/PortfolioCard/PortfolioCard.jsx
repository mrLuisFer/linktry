import BaseCard from '../../Base/BaseCard'
import './portfolioCard.css'

export default function PortfolioCard({ portfolioSocialLink }) {
  const { username, url, description } = portfolioSocialLink

  return (
    <BaseCard
      username={username}
      url={url}
      description={description}
      customCardClasses='portfolioCard bg-gradient-to-l from-green-400 to-green-500 dark:to-indigo-500 dark:from-indigo-400'
    />
  )
}
