"use client"

import useScrollTop from '@/hooks/useScrollTop'
import { cn } from '@/lib/utils';
import Logo from './Logo';
import { ModeToggle } from '@/components/modeToggle';


const Navbar = () => {

  const scrolled = useScrollTop();

  return (
    <div className={cn(
      "z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6", scrolled && "border-b shadow-md"
    )}>
      <Logo />
      <div className='w-full flex justify-between items-center gap-x-2 md:ml-auto md:justify-end '>
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar