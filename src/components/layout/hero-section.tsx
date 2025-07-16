
'use client'

import Image from 'next/image'
import { Button } from '../ui/button'


type HeroProps = {
  title: string
  description?: string
  imageUrl: string
  imageAlt?: string
}


const HeroSection = ({ title, description, imageUrl, imageAlt }: HeroProps) => {
  return (
    <div className=" ">
      <section className="relative w-full h-[700px]  shadow-sm">
        {/* Background Image */}
        <Image
          src={imageUrl}
          alt={imageAlt || 'Hero image'}
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg mb-6 max-w-2xl">{description}</p>
        </div>
      </section>
    </div>
  )
}

export default HeroSection
