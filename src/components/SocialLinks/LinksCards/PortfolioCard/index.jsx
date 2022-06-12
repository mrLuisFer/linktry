import BaseCard from '../../Base/BaseCard'

export default function PortfolioCard({ portfolioSocialLink }) {
  const { username, url, description } = portfolioSocialLink

  return (
    <BaseCard
      username={username}
      url={url}
      description={description}
      customCardClasses='bg-gradient-to-l to-indigo-500 from-indigo-400 hover:shadow-[10px_10px_0px_#3351d6]'
    />
  )
}
