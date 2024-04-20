'use client'
import { FC } from 'react'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

interface NavbarItemProps {
  title: string
  param: string
}

export const NavbarItem: FC<NavbarItemProps> = ({ title, param }) => {
  const searchParams = useSearchParams()
  const genre = searchParams.get('genre')

  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold ${
          genre === param
            ? 'underline underline-offset-8 decoration-4 decoration-amber-500'
            : ''
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  )
}
