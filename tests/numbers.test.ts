import * as v from 'valibot'
import { describe, test, expect } from 'vitest'
import { numbers } from '../src'

const { BigUintSchema, INT16_MAX, INT16_MIN, INT32_MAX, INT32_MIN, INT8_MAX, INT8_MIN, Int16Schema, Int32Schema, Int8Schema, UINT16_MAX, UINT32_MAX, UINT8_MAX, Uint16Schema, Uint32Schema, Uint8Schema } = numbers

describe('Integers', () => {
  test('Int8', () => {
    let value: number
    let result: ReturnType<typeof v.safeParse>
    // Less than min
    value = INT8_MIN - 10
    result = v.safeParse(Int8Schema, value)
    expect(result.success).toBeFalsy()
    expect(result?.error?.message).toBe(`It should be greater than ${INT8_MIN - 1}`)
    // More than max
    value = INT8_MAX + 10
    result = v.safeParse(Int8Schema, value)
    expect(result.success).toBeFalsy()
    expect(result?.error?.message).toBe(`It should be less than ${INT8_MAX + 1}`)
  })

  test('Int16', () => {
    let value: number
    let result: ReturnType<typeof v.safeParse>
    // Less than min
    value = INT16_MIN - 10
    result = v.safeParse(Int16Schema, value)
    expect(result.success).toBeFalsy()
    expect(result?.error?.message).toBe(`It should be greater than ${INT16_MIN - 1}`)
    // More than max
    value = INT16_MAX + 10
    result = v.safeParse(Int16Schema, value)
    expect(result.success).toBeFalsy()
    expect(result?.error?.message).toBe(`It should be less than ${INT16_MAX + 1}`)
  })

  test('Int32', () => {
    let value: number
    let result: ReturnType<typeof v.safeParse>
    // Less than min
    value = INT32_MIN - 10
    result = v.safeParse(Int32Schema, value)
    expect(result.success).toBeFalsy()
    expect(result?.error?.message).toBe(`It should be greater than ${INT32_MIN - 1}`)
    // More than max
    value = INT32_MAX + 10
    result = v.safeParse(Int32Schema, value)
    expect(result.success).toBeFalsy()
    expect(result?.error?.message).toBe(`It should be less than ${INT32_MAX + 1}`)
  })
})

describe('Unsigned Integers', () => {
  test('Uint8', () => {
    let value: number
    let result: ReturnType<typeof v.safeParse>
    // Less than min
    value = - 10
    result = v.safeParse(Uint8Schema, value)
    expect(result.success).toBeFalsy()
    expect(result?.error?.message).toBe('It should be greater than 0')
    // More than max
    value = UINT8_MAX + 10
    result = v.safeParse(Uint8Schema, value)
    expect(result.success).toBeFalsy()
    expect(result?.error?.message).toBe(`It should be less than ${UINT8_MAX + 1}`)
  })

  test('Int16', () => {
    let value: number
    let result: ReturnType<typeof v.safeParse>
    // Less than min
    value = - 10
    result = v.safeParse(Uint16Schema, value)
    expect(result.success).toBeFalsy()
    expect(result?.error?.message).toBe('It should be greater than 0')
    // More than max
    value = UINT16_MAX + 10
    result = v.safeParse(Uint16Schema, value)
    expect(result.success).toBeFalsy()
    expect(result?.error?.message).toBe(`It should be less than ${UINT16_MAX + 1}`)
  })

  test('Int32', () => {
    let value: number
    let result: ReturnType<typeof v.safeParse>
    // Less than min
    value = - 10
    result = v.safeParse(Uint32Schema, value)
    expect(result.success).toBeFalsy()
    expect(result?.error?.message).toBe('It should be greater than 0')
    // More than max
    value = UINT32_MAX + 10
    result = v.safeParse(Uint32Schema, value)
    expect(result.success).toBeFalsy()
    expect(result?.error?.message).toBe(`It should be less than ${UINT32_MAX + 1}`)
  })

  test('BigUint', () => {
    // Less than min
    const value = - 10n
    const result = v.safeParse(BigUintSchema, value)
    expect(result.success).toBeFalsy()
    expect(result?.error?.message).toBe('It should be greater than 0')
  })
})
