import axios from 'axios'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const http = axios.create({
  baseURL: process.env.BASE_URL_API,
  headers: {
    'Content-Type': 'application/json',
    [process.env.NEXT_PUBLIC_GUEST_TOKEN_NAME as string]: process.env.NEXT_PUBLIC_GUEST_TOKEN_VALUE
  }
})

export const copyToClipboard = async (text: string, alertTitle: string | null = null) => {
  await navigator.clipboard.writeText(text)
  console.log(alertTitle)
  // try {
  //   // toast.success(alertTitle || 'Text copied to clipboard')
  //   // toast.success(alertTitle || 'Text copied to clipboard')
  // } catch (err) {
  //   // toast.error(`Failed to copy text: ${err} `)
  // }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isStringArray = (arr: any[]): boolean => Array.isArray(arr) && arr.every((item) => typeof item === 'string')

export const DOT = '• '

export const slugify = (text: string) => {
  return text
    .normalize('NFD') // split accents
    .replace(/[\u0300-\u036f]/g, '') // remove accents
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-') // whitespace → -
    .replace(/[^a-z0-9-]/g, '') // allowed chars
    .replace(/-+/g, '-') // collapse dashes
    .replace(/^-+|-+$/g, '') // trim dashes
}

export const estimateReadingTime = (htmlContent: string, wordsPerMinute: number = 200): number => {
  // Remove HTML tags using DOMParser
  const parser = new DOMParser()
  const doc = parser.parseFromString(htmlContent, 'text/html')
  const text = doc.body.textContent || ''

  // Count words
  const words = text.trim().split(/\s+/)
  const wordCount = words.length

  // Calculate reading time and round up
  return Math.ceil(wordCount / wordsPerMinute)
}

// export const formatAmount = (number: number, currency: string = 'USD') =>
//   new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(number)

export const formatAmount = (number: number, currency: string = 'CAD', locale: string = 'en-CA') =>
  new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    currencyDisplay: 'code' // or 'code' to show CAD
  }).format(number)
