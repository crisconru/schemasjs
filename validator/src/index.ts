import * as v from 'valibot'
import { z } from 'zod'

export interface SafeParse<T> {
  success: boolean
  data?: T
  errors?: string[]
}

export interface Schema<T> {
  is: (data: any) => boolean
  parse: (data: any) => T
  safeParse: (data: any) => SafeParse<T>
}

export const ZodValidator = <T>(schema: z.ZodSchema): Schema<T> => ({
  is: (data: any): boolean => schema.safeParse(data).success,
  parse: (data: any) => schema.parse(data),
  safeParse: (data: any) => {
    const parsed = schema.safeParse(data)
    if (parsed.success) return { success: parsed.success, data: parsed.data }
    return { success: parsed.success, errors: [parsed.error.message] }
  }
})

// @ts-expect-error
export const ValibotValidator = <T>(schema: v.BaseSchema): Schema<T> => ({
  is: (data: any): boolean => v.is(schema, data),
  parse: (data: any) => v.parse(schema, data),
  safeParse: (data: any) => {
    const parsed = v.safeParse(schema, data)
    if (parsed.success) return { success: parsed.success, data: parsed.output }
    return { success: parsed.success, errors: parsed.issues.map(issue => issue.message) }
  }
})
