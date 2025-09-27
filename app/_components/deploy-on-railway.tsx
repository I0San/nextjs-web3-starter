import React from 'react'
import Image from 'next/image'

export const DeployOnRailway = () => {
  return (
    <div className="flex gap-4 items-center flex-col sm:flex-row">
    <a
      className=""
      href="https://railway.com/deploy/T7csdY?referralCode=xI5enq&utm_medium=integration&utm_source=template&utm_campaign=generic"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="https://railway.com/button.svg"
        alt="Deploy on Railway"
        width={172}
        height={37}
      />
    </a>
  </div>
  )
}