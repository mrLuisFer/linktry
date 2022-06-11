import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi'
import { socialLinks } from '../../../apiData/socialLinks'
import AnchorTag from '../../AnchorTag/AnchorTag'

const urlIconClassName =
  'transform hover:scale-110 text-gray-800 dark:text-gray-300 p-2 hover:bg-gray-800 hover:text-gray-100 rounded-lg'

export default function AvatarLinkTags() {
  return (
    <div className='flex justify-center gap-x-9 m-1 text-xl'>
      <AnchorTag
        hrefUrl={socialLinks.twitter.url}
        customClasses={urlIconClassName}
      >
        <FiTwitter />
      </AnchorTag>
      <AnchorTag
        hrefUrl={socialLinks.github.url}
        customClasses={urlIconClassName}
      >
        <FiGithub />
      </AnchorTag>
      <AnchorTag
        hrefUrl={socialLinks.linkedin.url}
        customClasses={urlIconClassName}
      >
        <FiLinkedin />
      </AnchorTag>
    </div>
  )
}
