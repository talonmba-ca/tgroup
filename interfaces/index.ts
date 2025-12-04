export interface ErrorObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export interface IRole {
  id: number
  name: string
  createdAt: Date
  updatedAt: Date
}

export interface IUser {
  id: number
  username: string
  email: string
  password: string
  name: string
  active: boolean
  avatar: string | null
  phoneNumber: string | null
  countryCode: string | null
  country: string | null
  sex: 'M' | 'F' | null
  googleId: string | null
  appleId: string | null
  facebookId: string | null
  provider: IProvider
  // age: IAge | null
  idRole: number
  role: IRole
  verified: Date | null
  createdAt: Date
  updatedAt: Date
}

export type IProvider = 'EMAIL' | 'GOOGLE' | 'APPLE' | 'FACEBOOK'

export interface Formation {
  id: string
  title: string
  slug: string
  thumbnail: string
  userId: string
  price: number
  excerpt: string
  context: string
  plan: string
  description: string
  status: BlogStatus
  tags: string
  place: string
  createdAt: Date
  updatedAt: Date
}

export enum BlogStatus {
  BROUILLON = 'Brouillon',
  PUBLIÉ = 'Publié',
  ARCHIVÉ = 'Archivé'
}

export interface Contact {
  id: string
  fullName: string
  email: string
  type: string
  category: string
  phone: string
  message: string
  country: string
  status: string
  linkedin: string
  company: string
  formationId: null
  createdAt: Date
  updatedAt: Date
}

export interface Client {
  id: string
  fullName: string
  email: string
  phone: string
  country: string
  status: string
  linkedin: string
  company: string
  contactId: string
  createdAt: Date
  updatedAt: Date
}

export interface Blog {
  id: string
  title: string
  slug: string
  userId: string
  content: string
  date: Date
  thumbnail: string
  author: string
  views: number
  excerpt: string
  status: string
  tags: string
  createdAt: Date
  updatedAt: Date
}
