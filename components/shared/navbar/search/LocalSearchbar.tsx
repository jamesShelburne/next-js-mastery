"use client"

import React from 'react'
import Image from 'next/image'
import { Input } from "@/components/ui/input"


interface CustomInputProps{
  route: string,
  iconPosition: string,
  imgSrc: string,
  placeholder: string,
  otherClasses: string
}

const LocalSearchbar = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,  
}: CustomInputProps) => {
  return (
    <div className = "relative w-full max-w-[766px] max-lg:hidden">
        <div className = {`background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`} >
        {iconPosition === 'left' && (
            <Image src= {imgSrc} 
          alt = "search icon"
          width = {24}
          height = {24} 
          className = "cursor-pointer"/> )}
        <Input 
        type = "text"
        placeholder= {placeholder}
        value = ""
        onChange = {() => {}}
        className = "paragraph-regular no-focus background-light800_darkgradient placeholder border-none shadow-none outline-none " />

{iconPosition === 'right' && (
            <Image src= {imgSrc} 
          alt = "search icon"
          width = {24}
          height = {24} 
          className = "cursor-pointer"/> )}

        </div>
        </div>
  )
}

export default LocalSearchbar