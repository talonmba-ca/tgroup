import { CONTACT_TYPE } from '@/lib/constants'
import * as z from 'zod'

// internationalization setup.

// import { fr } from 'zod/locales'
// z.config(fr())

z.config(z.locales.fr())

// async function loadLocale(lang) {
//   const { default: locale } = await import(`zod/v4/locales/${lang}.js`)
//   z.config(locale())
// }

// await loadLocale('es')

export const ContactSchema = z.object({
  fullName: z.string().max(100),
  email: z.email(),
  phone: z.string().max(20),
  linkedin: z.url().max(100).optional().nullable().default(null),
  country: z.string().max(50).optional().nullable().default(null),
  company: z.string().max(100).optional().nullable().default(null),
  category: z.string().max(100).optional().nullable().default(null),
  message: z.string().max(500).min(5),
  status: z.enum(['Non débuté', 'En attente', 'En traitement', 'Fermé']).default('Non débuté'),
  formationId: z.string().optional().nullable().default(null),
  type: z.enum(CONTACT_TYPE)
})
