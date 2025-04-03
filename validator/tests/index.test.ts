import { describe, expect, test } from 'vitest'
import { Float32Schema as Float32ValibotSchema, type Uint8 as Uint8Valibot, Uint8Schema as Uint8ValibotSchema, type Float32 as Float32Valibot } from '@schemasjs/valibot-numbers'
import { type Uint8 as Uint8Zod, Uint8Schema as Uint8ZodSchema, type Float32 as Float32Zod, Float32Schema as Float32ZodSchema } from '@schemasjs/zod-numbers'
import { ValibotValidator, ZodValidator } from '../src'

describe('Valibot', () => {
  const Uint8Schema = ValibotValidator<Uint8Valibot>(Uint8ValibotSchema)
  const Float32Schema = ValibotValidator<Float32Valibot>(Float32ValibotSchema)

  test('is', () => {
    // OK
    [
      { schema: Uint8Schema, num: 8 },
      { schema: Float32Schema, num: -3.4e38 }
    ].forEach(({schema, num}) => expect(schema.is(num)).toBeTruthy());
    // Error
    [
      { schema: Uint8Schema, num: -8 },
      { schema: Float32Schema, num: -3.4e39 }
    ].forEach(({schema, num}) => expect(schema.is(num)).toBeFalsy())
  })

  test('parse', () => {
    // OK
    [
      { schema: Uint8Schema, num: 8 },
      { schema: Float32Schema, num: -3.4e38 }
    ].forEach(({schema, num}) => expect(schema.parse(num)).toBe(num));
    // Error
    [
      { schema: Uint8Schema, num: -8 },
      { schema: Float32Schema, num: -3.4e39 }
    ].forEach(({schema, num}) => expect(() => schema.parse(num)).toThrowError())
  })

  test('safeParse', () => {
    // OK
    [
      { good: Uint8Schema.safeParse(8), num: 8 },
      { good: Float32Schema.safeParse(-3.4e38), num: -3.4e38 }
    ].forEach(({good, num}) => {
      expect(good.success).toBeTruthy()
      if (good.success) {
        expect(good.value).toBe(num)
      }
    });
    // Error
    [Uint8Schema.safeParse(-8), Float32Schema.safeParse(-3.4e39)].forEach(bad => {
      expect(bad.success).toBeFalsy()
      expect(bad).toHaveProperty('errors')
      if (!bad.success) {
        expect(bad.errors.length).toBeGreaterThan(0)
      }
    })
  })
})

describe('Zod', () => {
  const Uint8Schema = ZodValidator<Uint8Zod>(Uint8ZodSchema)
  const Float32Schema = ZodValidator<Float32Zod>(Float32ZodSchema)

  test('is', () => {
    // OK
    [
      { schema: Uint8Schema, num: 8 },
      { schema: Float32Schema, num: -3.4e38 }
    ].forEach(({schema, num}) => expect(schema.is(num)).toBeTruthy());
    // Error
    [
      { schema: Uint8Schema, num: -8 },
      { schema: Float32Schema, num: -3.4e39 }
    ].forEach(({schema, num}) => expect(schema.is(num)).toBeFalsy())
  })

  test('parse', () => {
    // OK
    [
      { schema: Uint8Schema, num: 8 },
      { schema: Float32Schema, num: -3.4e38 }
    ].forEach(({schema, num}) => expect(schema.parse(num)).toBe(num));
    // Error
    [
      { schema: Uint8Schema, num: -8 },
      { schema: Float32Schema, num: -3.4e39 }
    ].forEach(({schema, num}) => expect(() => schema.parse(num)).toThrowError())
  })

  test('safeParse', () => {
    // OK
    [
      { good: Uint8Schema.safeParse(8), num: 8 },
      { good: Float32Schema.safeParse(-3.4e38), num: -3.4e38 }
    ].forEach(({good, num}) => {
      expect(good.success).toBeTruthy()
      if (good.success) {
        expect(good.value).toBe(num)
      }
    });
    // Error
    [Uint8Schema.safeParse(-8), Float32Schema.safeParse(-3.4e39)].forEach(bad => {
      expect(bad.success).toBeFalsy()
      expect(bad).toHaveProperty('errors')
      if (!bad.success) {
        expect(bad.errors.length).toBeGreaterThan(0)
      }
    })
  })
})
