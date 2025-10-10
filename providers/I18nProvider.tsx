import { I18nProviderClient } from '@/locales/client'
import React from 'react'

export const I18nProvider = ({ locale, children }: { children: React.ReactNode; locale: string }) => {
  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
}
