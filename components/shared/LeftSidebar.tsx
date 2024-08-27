"use client"
import { sidebarLinks } from '@/constants/constants';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SignedOut } from '@clerk/nextjs';

const LeftSidebar = () => {
  const pathname = usePathname();
  return (

    <section className = "background-light900_dark200 light-border shadow-light-300 custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 max-sm:hidden lg:w-[266px] dark:shadow-none"> 

<div className = "flex flex-1 flex-col gap-6 ">
   
   {sidebarLinks.map((item) => {
      
      const isActive = (pathname.includes(item.route) && item.route.length >1 || pathname === item.route)
      return (
       // TODO

           <Link href = {item.route}
           key={item.route}
               className = {`${isActive ? 'primary-gradient text-light-900 rounded-lg' : 'text-dark300_light900'} flex items-center justify-start gap-4 bg-transparent p-4`} >
               <Image src = {item.imgURL}
               alt = {item.label}
               width = {20}
               height = {20} 
               className = {`${isActive ? "" : 'invert-colors'}`}
               />
               <p className = {`${isActive ? "base-bold" : 'base-medium '}max-lg:hidden`}>{item.label}</p>
           </Link>
         
   )
 })}
</div> 
<SignedOut>
      <div className='flex flex-col gap-3'>
       
          <Link href='/sign-in'>
                <Button className='small-medium btn-secondary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none'>
                  <Image src = "/assets/icons/account.svg" alt = "login" width ={20} height = {20} className = "invert-colors lg:hidden "/>
                   <span className = "primary-text-gradient max-lg:hidden"> Log In </span>
                  
                  </Button>          
           </Link>

        
       
          <Link href='/sign-up'>
          <Image src = "/assets/icons/sign-up.svg" alt = "signup" width ={20} height = {20} className = "invert-colors lg:hidden "/>
          <span className = " max-lg:hidden">  Sign Up </span>
                        
           </Link>

        
      </div>

    </SignedOut>

    </section>
  )
}

export default LeftSidebar