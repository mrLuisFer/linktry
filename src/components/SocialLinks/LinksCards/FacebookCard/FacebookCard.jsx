import React from 'react'
import { FaFacebookF } from 'react-icons/fa'

import BaseCard from '../../Base/BaseCard'

export default function FacebookCard() {
  return (
    <BaseCard
      customCardClasses='bg-blue-700 dark:bg-blue-700'
      jsxIcon={<FaFacebookF />}
    />
  )
}
