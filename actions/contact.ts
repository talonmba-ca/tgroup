'use server'

import prisma from '@/lib/prisma'
import { ContactSchema } from '@/validations'
import z from 'zod'

export type PrevState = {
  message?: string | null
  errors?: Record<string, string[]> | null
  values?: Record<string, string | undefined> | null
}

export const handleContactSubmit = async (prevState: PrevState, formData: FormData) => {
  const _data = {
    ...Object.fromEntries(formData),
    type: prevState?.values?.type || 'General',
    // category: prevState?.values?.category,
    formationId: prevState?.values?.formationId
  }
  const res = ContactSchema.safeParse(_data)
  if (!res.success) {
    return {
      errors: z.flattenError(res.error).fieldErrors,
      message: null,
      values: _data
    }
  }
  try {
    await prisma.contact.create({ data: res.data })
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
