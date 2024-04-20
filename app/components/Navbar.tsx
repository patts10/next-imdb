import { NavbarItem } from './NavbarItem'

export const Navbar = () => {
  return (
    <div className='flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6'>
      <NavbarItem title='Trending' param='ferchTrending' />
      <NavbarItem title='Top rated' param='fetchTopRated' />
    </div>
  )
}
