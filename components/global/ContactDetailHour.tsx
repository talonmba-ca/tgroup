import { cn } from '@/lib/utils'
import React from 'react'

const ContactDetailHour = ({ dark = false }: { dark?: boolean }) => {
  return (
    <li className='rounded-lg  w-full'>
      <h3
        className={cn('text-lg font-semibold text-slate-800', {
          'text-white': dark
        })}
      >
        Heures de Bureau
      </h3>
      <p
        className={cn('mt-3 text-lg font-normal text-gray-700', {
          'text-gray-300': dark
        })}
      >
        Lundi-Vendredi <br />
        8:00 am à 17:45 pm
      </p>
    </li>
  )
}

export default ContactDetailHour
