'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import FadeInImage from '../global/FadeInImage'
import ContactDetailAddress from '../global/ContactDetailAddress'
import ContactDetailHour from '../global/ContactDetailHour'
import ContactDetailPhone from '../global/ContactDetailPhone'
import FacebookIcon from '../icons/FacebookIcon'
import LinkedinIcon from '../icons/LinkedinIcon'
import InstagramIcon from '../icons/InstagramIcon'
import { cn } from '@/lib/utils'

const Footer = () => {
  const pn = usePathname()

  const menuItems = [
    {
      title: 'À propos',
      link: '/about'
    },
    {
      title: 'FAQ',
      link: '/faq'
    },
    {
      title: 'Formations',
      link: '/formations'
    },
    {
      title: 'Contact',
      link: '/contact'
    }
  ]
  return (
    <div className='mt-auto '>
      {/* <CurvePathIcon className='fill-[#1A1A1A] bg-white ' /> */}
      <footer className='py-12 bg-[#1A1A1A]   sm:pt-16 lg:pt-20 skew-y-1o '>
        <div className='px-6 md:px-12 lg:px-16  sm:px-6 -skew-y-1o'>
          <div className='flex flex-col lg:justify-between md:flex-row gap-6 flex-wrap'>
            <div className='shrink-0'>
              <Link href='/' className='flex items-center gap-x-2'>
                <FadeInImage path='/images/talonmba.jpeg' className='aspect-auto w-20 md:w-48' imageClassName='aspect-auto' />
              </Link>
            </div>

            <nav className='flex items-start flex-col space-y-3'>
              {menuItems.map((menu) => (
                <Link
                  key={menu.link}
                  href={menu.link}
                  className={cn('font-bold text-lg text-gray-300 transition-all duration-200 hover:-translate-y-0.5 hover:text-primary2', {
                    'text-primary2 pointer-events-none': pn.includes(menu.link)
                  })}
                >
                  {menu.title}
                </Link>
              ))}
            </nav>

            <ul className='flex flex-col  space-y-6'>
              <ContactDetailAddress dark />
              <ContactDetailHour dark />
            </ul>

            <div className='flex flex-col gap-y-4'>
              <ContactDetailPhone dark />
              <ul className='flex items-center  space-x-3'>
                <div className='inline-flex items-center justify-center w-8 h-8 text-white transition-all duration-200 bg-gray-800 rounded-full hover:bg-blue-400'>
                  <FacebookIcon />
                </div>
                <div className='inline-flex items-center justify-center w-8 h-8 text-white transition-all duration-200 bg-gray-800 rounded-full hover:bg-sky-600'>
                  <LinkedinIcon />
                </div>
                <div className='inline-flex items-center justify-center w-8 h-8 text-white transition-all duration-200 bg-gray-800 rounded-full hover:bg-amber-600'>
                  <InstagramIcon />
                </div>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Footer
