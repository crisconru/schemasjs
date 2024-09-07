import { describe, expect, test } from 'vitest'
import * as v from 'valibot'
import { z } from 'zod'
import { type Uint8 as Uint8Valibot, Uint8Schema as Uint8ValibotSchema } from '@schemasjs/valibot-numbers'
import { type Uint8 as Uint8Zod, Uint8Schema as Uint8ZodSchema } from '@schemasjs/zod-numbers'
import { ValibotValidator, ZodValidator } from '../src'

describe('Valibot', () => {
  const Uint8Schema = ValibotValidator<Uint8Valibot>(Uint8ValibotSchema)

  test('is', () => {
    expect(Uint8Schema.is(8)).toBeTruthy()
    expect(Uint8Schema.is(8.9)).toBeFalsy()
  })

  test('parse', () => {
    expect(Uint8Schema.parse(8)).toBe(8)
    expect(() => Uint8Schema.parse(8.9)).toThrowError()
  })

  test('safeParse', () => {
    const good = Uint8Schema.safeParse(8)
    expect(good.success).toBeTruthy()
    if (good.success) {
      expect(good.data).toBe(8)
    }
    const bad = Uint8Schema.safeParse(-8)
    const valibotBad = v.safeParse(Uint8ValibotSchema, -8)
    expect(bad.success).toBeFalsy()
    expect(bad).toHaveProperty('errors')
    // @ts-ignore
    bad.errors?.forEach((error: string, idx: number) => expect(error).toBe(valibotBad.issues[idx].message))
  })
})

describe('Zod', () => {
  const Uint8Schema = ZodValidator<Uint8Zod>(Uint8ZodSchema)

  test('is', () => {
    expect(Uint8Schema.is(8)).toBeTruthy()
    expect(Uint8Schema.is(8.9)).toBeFalsy()
  })

  test('parse', () => {
    expect(Uint8Schema.parse(8)).toBe(8)
    expect(() => Uint8Schema.parse(8.9)).toThrowError()
  })

  test('safeParse', () => {
    const good = Uint8Schema.safeParse(8)
    expect(good.success).toBeTruthy()
    if (good.success) {
      expect(good.data).toBe(8)
    }
    const bad = Uint8Schema.safeParse(-8)
    const zodBad = Uint8ZodSchema.safeParse(-8)
    expect(bad.success).toBeFalsy()
    expect(bad).toHaveProperty('errors')
    // @ts-ignore
    expect(bad.errors[0]).toBe(zodBad.error?.message)
  })
})
