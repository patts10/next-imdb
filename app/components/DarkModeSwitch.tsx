'use client'

import { useEffect, useState } from 'react'

import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { useTheme } from 'next-themes'

export const DarkModeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const currentTheme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div>
      { mounted && (currentTheme === 'dark' ? (
        <MdLightMode
          onClick={() => setTheme('light')}
          className='cursor-pointer text-xl hover:text-amber-500'
        />
      ) : (
        <MdDarkMode
          onClick={() => setTheme('dark')}
          className='cursor-pointer text-xl hover:text-amber-500'
        />
      ))}
    </div>
  )
}
