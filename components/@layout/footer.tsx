import React from 'react'

export const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org/learn"
        target="_blank"
        rel="noopener noreferrer"
      >
        NextJS 16
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
        href="https://reown.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Reown AppKit
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://tanstack.com/query/latest/docs/framework/react/overview"
        target="_blank"
        rel="noopener noreferrer"
      >
        TanStack Query
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://ui.shadcn.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Shadcn/UI
      </a>
    </footer>
  )
}