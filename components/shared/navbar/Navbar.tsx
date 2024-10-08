import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { UserButton, SignedIn } from '@clerk/nextjs'
import GlobalSearch from './search/GlobalSearch'
import Theme from '../Theme'

const Navbar = () => {
  return (
    <nav className ='flex-between background-light900_dark200 shadow-light-300 fixed z-50 w-full gap-5 p-6 sm:px-12 dark:shadow-none'>
    <Link href='/' className = 'flex items-center gap-1'>
      <Image src = '/assets/images/site-logo.svg' width = {23} height = {23} alt='DevFlow'/>

      <p className='h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden'>Dev <span className='text-primary-500'>Overflow</span></p>
    </Link>
    <GlobalSearch />
    <div className='flex-between gap-5'>
<Theme />
<SignedIn>
    <UserButton afterSignOutUrl= "/" appearance={{elements: {
        avatarBox : 'h-10 w-10'
    },
    variables: {colorPrimary: '#ff7000'}
    }}/>
</SignedIn>

    </div>
    </nav>
  )
}

export default Navbar