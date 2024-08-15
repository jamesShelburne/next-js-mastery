import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Link } from 'lucide-react'

const NoResult = () => {
  return (
    <div className = "mt-10 flex w-full flex-col items-center justify-center">
      <Image src = "/assets/images/light-illustration.png" alt = "no result illustration" width = {270} height = {270} className = "block object-contain dark:hidden"  />

      <Image src = "/assets/images/dark-illustration.png" alt = "no result illustration" width = {270} height = {270} className = " hidden object-contain dark:flex"  />
      
      <h2 className = "h3-bold text-dark100_light900 mt-5">There's no questions to show</h2>
      <p className = "body-regular text-dark300_light700 mt-2">Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡</p>
        <Link>
        
          <Button>

            Ask a Question
          </Button>

        </Link>

    </div>
  )
}

export default NoResult