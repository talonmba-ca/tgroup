'use client'
// import AppLogo from '../global/AppLogo'
// import { getScopedI18n } from '@/locales/server'
// import LocaleSwitcher from '../global/LocaleSwitcher'
// import DonateButton from './DonateButton'
// import { Suspense } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
// import ToggleNavMobile from './ToggleNavMobile'
import ToggleNavMobile from '../global/ToggleNavMobile'
import FadeInImage from '../global/FadeInImage'
import { usePathname } from 'next/navigation'
import { ChevronDownIcon } from 'lucide-react'

// interface NabarItemsProps { title: string; link: string; subMenu: { title: string; link: string }[] }

const NabarItems = ({ mobile = false }: { mobile?: boolean }) => {
  // const t = await getScopedI18n('header')
  //   const donate = await getScopedI18n('donate')
  const pn = usePathname()
  const menuItems = [
    {
      title: 'À propos',
      link: '/about',
      subMenu: []
    },
    {
      title: 'Services',
      link: '/services',
      subMenu: [
        { title: 'Formation', link: process.env.NEXT_PUBLIC_FORMATION_URL },
        { title: 'Security', link: process.env.NEXT_PUBLIC_SECURITY_URL },
        { title: 'Placement', link: process.env.NEXT_PUBLIC_PLACEMENT_URL },
        { title: 'Logistique', link: process.env.NEXT_PUBLIC_LOGISTIC_URL }
      ]
    },
    // { title: 'Nos formations', link: '/formations', subMenu: [] },
    // { title: 'Avantages', link: '/#advantages', subMenu: [] },
    { title: 'Blogue', link: '/blog', subMenu: [] },
    {
      title: 'FAQ',
      link: '/faq',
      subMenu: []
    },
    {
      title: 'Contact',
      link: '/contact',
      subMenu: []
    }
  ]

  return (
    <ul className='flex items-center justify-center flex-wrap gap-4'>
      {menuItems.map((item) => {
        if (item.subMenu && item.subMenu.length > 0) {
          return (
            <div className='group relative' key={item.link}>
              <div className='text-center flex items-center text-slate-700 hover:text-primary2 gap-x-1 font-medium text-lg text-balance  hover:underline cursor-pointer'>
                <span>{item.title}</span>
                <ChevronDownIcon className='w-5 group-hover:rotate-180 transition-transform duration-500' />
              </div>
              <div
                className={cn(
                  'hidden opacity-0 group-hover:opacity-100   group-hover:flex flex-col absolute duration-500 transition-all w-[210px]',
                  {
                    'left-0': mobile,
                    'right-0': !mobile
                  }
                )}
              >
                <div className={cn('pt-[32px]', { 'pt-[40px]': mobile })}></div>
                <div className='flex flex-col bg-white  shadow-1  rounded-lgd overflow-hidden z-10'>
                  {item.subMenu.map((menu) => (
                    <Link
                      key={menu.link}
                      target={menu.link!.startsWith('http') ? '_blank' : '_self'}
                      className={`hover:text-primary2  px-4 py-2 transition-all ${
                        pn === menu.link ? 'text-primary2 underline  pointer-events-none' : ''
                      }`}
                      href={menu.link!}
                    >
                      {menu.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )
        }
        return (
          <li
            key={item.link}
            className={cn(
              'text-center flex items-center text-slate-700 hover:text-primary2 gap-x-1 text-xs sm:text-base  text-balance  hover:underline',
              {
                'text-primary2 pointer-events-none': pn === item.link
              }
            )}
          >
            <Link href={item.link} className={cn(' flex items-center gap-x-1 font-medium text-lg py-2 px-3 rounded-md', {})}>
              {item.title}
              {/* {item.external && <ExternalLinkIcon className='w-3' />} */}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

interface HomeHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  gradient?: boolean
}

const HomeHeader = ({ className, ...rest }: HomeHeaderProps) => {
  return (
    <>
      <div className={cn(' flex flex-col items-center justify-between sticky  top-0 z-50 w-full  ', className)} {...rest}>
        <header className='px-6 md:px-12 lg:px-16 sm:px-[2rem] py-4 sm:py-6  flex items-center justify-between w-full'>
          <div className='flex items-center gap-x-3  '>
            <ToggleNavMobile />
            <Link href='/' className='flex items-center gap-x-2'>
              <FadeInImage path='/images/group.svg' className='aspect-auto w-20 md:w-48' imageClassName='aspect-auto' />
            </Link>
          </div>
          <nav className='hidden lg:flex flex-1 items-center justify-center'>
            <NabarItems />
          </nav>
          <div className='flex items-center gap-x-0.5d w-fit '>
            {/* <div>
              <Suspense>
                <LocaleSwitcher />
              </Suspense>
            </div> */}
          </div>
        </header>
      </div>
      {/* responsive */}
      <nav
        id='nav-mobile'
        className={cn(
          'hidden lg:hidden bg-white backdrop-blur-md top-[75px]  backdrop-filter w-full py-8 px-4  z-40 items-center justify-center shadow-2 '
        )}
      >
        <NabarItems mobile />
      </nav>
    </>
  )
}

export default HomeHeader
