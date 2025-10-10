import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
  // recommendedConfig: {
  //   ignorePatterns: ['**/lib/generated/prisma/**'],
  //   // Optional overrides
  //   '@typescript-eslint/no-unused-vars': ['warn'],
  //   '@typescript-eslint/no-unsafe-assignment': 'off',
  //   '@typescript-eslint/no-explicit-any': 'off'
  // }
})

const eslintConfig = [...compat.extends('next/core-web-vitals', 'next/typescript'),{
  ignores :['**/generated/**']
}]
// const eslintConfig = [...compat.extends('next/core-web-vitals')]

export default eslintConfig
