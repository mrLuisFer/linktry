interface IBaseCardProps {
  className?: string
  iconImg?: string
  urlBaseDomain?: string
  customThumbnail?: string
  customDescription?: string
}

export interface ICardData extends IBaseCardProps {
  id: string
  type: string
  url: string
  title: string
  description?: string
  thumbnail?: string
  customUrl?: string
}
