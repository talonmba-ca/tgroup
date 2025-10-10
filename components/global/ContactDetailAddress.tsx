import { cn } from '@/lib/utils'
import React from 'react'

const ContactDetailAddress = ({ dark = false }: { dark?: boolean }) => {
  return (
    <li>
      <h3
        className={cn('text-lg font-semibold text-slate-800', {
          'text-white': dark
        })}
      >
        Notre Adresse
      </h3>
      <p
        className={cn('mt-3 text-lg font-normal text-gray-700', {
          'text-gray-300': dark
        })}
      >
        1929 Rue Victor L Laurin, <br />
        Quebec, G2E 5Z4, Canada
      </p>
    </li>
  )
}

export default ContactDetailAddress
