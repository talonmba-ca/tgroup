'use client'

import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button'

export function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button disabled={pending} type='submit' className='py-6 bg-gradient hover:opacity-90 cursor-pointer w-full font-semibold text-base'>
      {pending ? 'Envoi en cours...' : 'Envoyer votre message'}
    </Button>
  )
}
