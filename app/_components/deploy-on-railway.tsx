import Image from 'next/image'

export const DeployOnRailway = () => {
  return (
    <div className="flex gap-4 items-center flex-col sm:flex-row">
    <a
      className=""
      href="https://railway.com/deploy/nextjs-web3-starter?referralCode=xI5enq"
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