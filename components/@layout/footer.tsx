import React from 'react'

export const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        NextJS
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://wagmi.sh/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Wagmi
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://tanstack.com/query/latest/docs/framework/react/overview"
        target="_blank"
        rel="noopener noreferrer"
      >
        TanStack Query
      </a>
    </footer>
  )
}