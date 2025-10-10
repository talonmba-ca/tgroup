import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CTAEmployee = () => {
  return (
    <section className='relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32 my-12'>
      <div className='absolute inset-0'>
        <Image
          className='object-cover w-full h-full md:object-left md:scale-150 md:origin-top-left'
          src='https://cdn.rareblocks.xyz/collection/celebration/images/cta/5/girl-working-on-laptop.jpg'
          alt=''
          //   width={1}
          //   height={1}
          objectFit='cover'
          fill
        />
      </div>

      <div className='absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent'></div>

      <div className='absolute inset-0 block bg-black/60 md:hidden'></div>

      <div className='relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
        <div className='text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left'>
          <h2 className='text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl'>Télétravail depuis le Cameroun</h2>
          <p className='mt-4 text-base text-gray-200'>
            Profitez des compétences exceptionnelles des talents camerounais pour renforcer votre équipe à distance. Une solution innovante
            et rentable, adaptée aux besoins des entreprises québécoises et internationales. Associez expertise, efficacité et flexibilité
            tout en optimisant vos coûts.
          </p>
          <div className='flex flex-col mt-8 lg:mt-12'>
            <Link
              href='/placement/contact'
              className='inline-flex items-center justify-center flex-shrink-0 w-auto px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 rounded-md sm:mt-0  sm:w-auto hover:bg-emerald-700 focus:bg-emerald-70 bg-gradient-to-r from-emerald-600 via-emerald-700  to-white text-lg'
            >
              Appliquer maintenant
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTAEmployee
