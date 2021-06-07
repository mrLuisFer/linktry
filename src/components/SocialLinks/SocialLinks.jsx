import React from 'react'
import { userConfig } from '../../userConfig'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'

export default function SocialLinks() {
  const userSocialMedia = userConfig.socialMedia
  const socialMediaIcons = [
    {
      name: 'twitter',
      component: <FaTwitter />,
    },
    { name: 'facebook', component: <FaFacebookF /> },
  ]

  const [socialName] = userSocialMedia

  const socialIconFounded = socialMediaIcons.find(
    (socialIcon) => socialIcon.name === socialName
  )

  return <div>{socialIconFounded}</div>
}
