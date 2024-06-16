import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  'schemas/valibot/*',
  'schemas/zod/*',
  'validator'
])
