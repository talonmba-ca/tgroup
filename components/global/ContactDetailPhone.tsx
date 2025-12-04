import { cn } from '@/lib/utils'
import React from 'react'

const ContactDetailPhone = ({ dark = false }: { dark?: boolean }) => {
  return (
    <li>
      <h3
        className={cn('text-lg font-semibold text-slate-800', {
          'text-white': dark
        })}
      >
        Contactez-nous
      </h3>
      <p
        className={cn('mt-3 text-lg font-normal text-gray-700', {
          'text-gray-300': dark
        })}
      >
        <a href='mailto:info@talonmba.com'>info@talonmba.com</a> <br />
        <a href='tel:+14185615574'>(+1) 418 561 5574</a>
      </p>
    </li>
  )
}

export default ContactDetailPhone
