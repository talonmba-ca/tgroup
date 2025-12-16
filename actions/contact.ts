'use server'

import { ContactSchema } from '@/validations'
import z from 'zod'

export type PrevState = {
  message?: string | null
  errors?: Record<string, string[]> | null
  values?: Record<string, string | undefined> | null
}

export const handleContactSubmit = async (prevState: PrevState, formData: FormData) => {
  // Honeypot check - if filled, silently reject (bots fill hidden fields)
  const honeypot = formData.get('website')
  if (honeypot) {
    // Return fake success to not tip off bots
    return {
      message: 'Votre message a été envoyé avec succès. Nous vous contacterons bientôt.',
      errors: null,
      values: null
    }
  }

  const _data = {
    ...Object.fromEntries(formData),
    type: prevState?.values?.type || 'General'
  }
  // Remove honeypot field from data
  delete (_data as Record<string, unknown>).website

  const res = ContactSchema.safeParse(_data)
  if (!res.success) {
    return {
      errors: z.flattenError(res.error).fieldErrors,
      message: null,
      values: _data
    }
  }
  try {
    await fetch(`${process.env.BASE_URL_API}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        [process.env.GUEST_TOKEN_NAME as string]: process.env.GUEST_TOKEN_VALUE!
      },
      body: JSON.stringify(res.data)
    }).then((r) => r.json())
    return {
      message: 'Votre message a été envoyé avec succès. Nous vous contacterons bientôt.',
      errors: null,
      values: null
    }
  } catch (error) {
    return {
      message: null,
      values: _data,
      errors: { error: ['An error occurred while submitting your message. Please try again later.' + error] }
    }
  }
}
