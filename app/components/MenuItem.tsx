import { FC } from 'react'
import Link from 'next/link'

interface MenuItemProps {
  title: string
  address: string
  Icon: FC
}

export const MenuItem:FC<MenuItemProps> = ({ title, address, Icon }) => {
  return (
    <Link href={address} className='hover:text-amber-500'>
      <Icon className='text-2xl sm:hidden' />
      <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  )
}
