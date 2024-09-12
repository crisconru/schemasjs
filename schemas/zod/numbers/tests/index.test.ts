import { describe, test, expect } from 'vitest'
import { BigUintSchema, FLOAT32_MAX, FLOAT32_MIN, Float32Schema, INT16_MAX, INT16_MIN, INT32_MAX, INT32_MIN, INT8_MAX, INT8_MIN, Int16ArraySchema, Int16ArrayTransform, Int16Schema, Int32ArraySchema, Int32ArrayTransform, Int32Schema, Int8ArraySchema, Int8ArrayTransform, Int8Schema, UINT16_MAX, UINT32_MAX, UINT8_MAX, UINT_MIN, Uint16ArraySchema, Uint16ArrayTransform, Uint16Schema, Uint32ArraySchema, Uint32ArrayTransform, Uint32Schema, Uint8ArraySchema, Uint8ArrayTransform, Uint8Schema, passToArray } from '../src'

describe('Unsigned Integers', () => {
  test('Uint8', () => {
    let value: number
    let result: ReturnType<typeof Uint8Schema.safeParse>
    // Less than min
    value = - 10
    result = Uint8Schema.safeParse(value)
    expect(result.success).toBeFalsy()
    if(!result.success)
      expect(result.error.issues[0].message).toBe('It should be greater than 0')
    // More than max
    value = UINT8_MAX + 10
    result = Uint8Schema.safeParse(value)
    expect(result.success).toBeFalsy()
    if(!result.success)
      expect(result.error.issues[0].message).toBe(`It should be less than ${UINT8_MAX + 1}`)
  })

  test('Int16', () => {
    let value: number
    let result: ReturnType<typeof Uint16Schema.safeParse>
    // Less than min
    value = - 10
    result = Uint16Schema.safeParse(value)
    expect(result.success).toBeFalsy()
    if(!result.success)
      expect(result.error.issues[0].message).toBe('It should be greater than 0')
    // More than max
    value = UINT16_MAX + 10
    result = Uint16Schema.safeParse(value)
    expect(result.success).toBeFalsy()
    if(!result.success)
      expect(result.error.issues[0].message).toBe(`It should be less than ${UINT16_MAX + 1}`)
  })

  test('Int32', () => {
    let value: number
    let result: ReturnType<typeof Uint32Schema.safeParse>
    // Less than min
    value = - 10
    result = Uint32Schema.safeParse(value)
    expect(result.success).toBeFalsy()
    if(!result.success)
      expect(result.error.issues[0].message).toBe('It should be greater than 0')
    // More than max
    value = UINT32_MAX + 10
    result = Uint32Schema.safeParse(value)
    expect(result.success).toBeFalsy()
    if(!result.success)
      expect(result.error.issues[0].message).toBe(`It should be less than ${UINT32_MAX + 1}`)
  })

  test('BigUint', () => {
    // Less than min
    const value = - 10n
    const result = BigUintSchema.safeParse(value)
    expect(result.success).toBeFalsy()
    if(!result.success)
      expect(result.error.issues[0].message).toBe('It should be greater than 0n')
  })
})

describe('Integers', () => {
  test('Int8', () => {
    let value: number
    let result: ReturnType<typeof Int8Schema.safeParse>
    // Less than min
    value = INT8_MIN - 10
    result = Int8Schema.safeParse(value)
    expect(result.success).toBeFalsy()
    if(!result.success)
      expect(result.error.issues[0].message).toBe(`It should be greater than ${INT8_MIN - 1}`)
    // More than max
    value = INT8_MAX + 10
    result = Int8Schema.safeParse(value)
    expect(result.success).toBeFalsy()
    if(!result.success)
      expect(result.error.issues[0].message).toBe(`It should be less than ${INT8_MAX + 1}`)
  })

  test('Int16', () => {
    let value: number
    let result: ReturnType<typeof Int16Schema.safeParse>
    // Less than min
    value = INT16_MIN - 10
    result = Int16Schema.safeParse(value)
    expect(result.success).toBeFalsy()
    if(!result.success)
      expect(result.error.issues[0].message).toBe(`It should be greater than ${INT16_MIN - 1}`)
    // More than max
    value = INT16_MAX + 10
    result = Int16Schema.safeParse(value)
    expect(result.success).toBeFalsy()
    if(!result.success)
      expect(result.error.issues[0].message).toBe(`It should be less than ${INT16_MAX + 1}`)
  })

  test('Int32', () => {
    let value: number
    let result: ReturnType<typeof Int32Schema.safeParse>
    // Less than min
    value = INT32_MIN - 10
    result = Int32Schema.safeParse(value)
    expect(result.success).toBeFalsy()
    if(!result.success)
      expect(result.error.issues[0].message).toBe(`It should be greater than ${INT32_MIN - 1}`)
    // More than max
    value = INT32_MAX + 10
    result = Int32Schema.safeParse(value)
    expect(result.success).toBeFalsy()
    if(!result.success)
      expect(result.error.issues[0].message).toBe(`It should be less than ${INT32_MAX + 1}`)
  })
})

describe('Floats', () => {
  test('Float32', () => {
    let value: number
    let result: ReturnType<typeof Float32Schema.safeParse>
    // Less than min
    value = FLOAT32_MIN - 1.1e38
    result = Float32Schema.safeParse(value)
    expect(result.success).toBeFalsy()
    if(!result.success)
      expect(result.error.issues[0].message).toBe('Invalid number, it is not a Float32 number')
      // expect(result.error.issues[0].message).toBe(`It should be greater than or equal to ${FLOAT32_MIN}`)
    // More than max
    value = FLOAT32_MAX + 1.1e38
    result = Float32Schema.safeParse(value)
    expect(result.success).toBeFalsy()
    if(!result.success)
      expect(result.error.issues[0].message).toBe('Invalid number, it is not a Float32 number')
      // expect(result.error.issues[0].message).toBe(`It should be less than or equal to ${FLOAT32_MAX}`)
  })
})

describe('passToArray', () => {
  test('Uint8Array', () => {
    const input = UINT8_MAX * 3 + 34
    const output = passToArray(input, UINT_MIN, UINT8_MAX)
    const array = Uint8Array.from(output)
    array.forEach((elem, index) => expect(array[index]).toBe(elem))
  })

  test('Uint16Array', () => {
    const input = UINT16_MAX * 3 + 34
    const output = passToArray(input, UINT_MIN, UINT16_MAX)
    const array = Uint8Array.from(output)
    array.forEach((elem, index) => expect(array[index]).toBe(elem))
  })

  test('Uint32Array', () => {
    const input = UINT32_MAX * 3 + 34
    const output = passToArray(input, UINT_MIN, UINT32_MAX)
    const array = Uint8Array.from(output)
    array.forEach((elem, index) => expect(array[index]).toBe(elem))
  })

  test('Int8Array', () => {
    // Positive
    let input = INT8_MAX * 3 + 34
    let output = passToArray(input, INT8_MIN, INT8_MAX)
    let array = Int8Array.from(output)
    array.forEach((elem, index) => expect(array[index]).toBe(elem))
    // Negative
    input = INT8_MIN * 3 - 34
    output = passToArray(input, INT8_MIN, INT8_MAX)
    array = Int8Array.from(output)
    array.forEach((elem, index) => expect(array[index]).toBe(elem))
  })

  test('Int16Array', () => {
    // Positive
    let input = INT16_MAX * 3 + 34
    let output = passToArray(input, INT16_MIN, INT16_MAX)
    let array = Int16Array.from(output)
    array.forEach((elem, index) => expect(array[index]).toBe(elem))
    // Negative
    input = INT16_MIN * 3 - 34
    output = passToArray(input, INT16_MIN, INT16_MIN)
    array = Int16Array.from(output)
    array.forEach((elem, index) => expect(array[index]).toBe(elem))
  })

  test('Int32Array', () => {
    // Positive
    let input = INT32_MAX * 3 + 34
    let output = passToArray(input, INT32_MIN, INT32_MAX)
    let array = Int32Array.from(output)
    array.forEach((elem, index) => expect(array[index]).toBe(elem))
    // Negative
    input = INT32_MIN * 3 - 34
    output = passToArray(input, INT32_MIN, INT32_MIN)
    array = Int32Array.from(output)
    array.forEach((elem, index) => expect(array[index]).toBe(elem))
  })
})

describe('Typed Array', () => {
  test('Uint8Array', () => {
    let input = UINT8_MAX * 3 + 34
    let output = Uint8ArrayTransform.parse(input)
    expect(output).toHaveLength(4)
    expect(Uint8ArraySchema.safeParse(output).success).toBeTruthy()
    expect(Uint8ArraySchema.safeParse([0, 1, 2, 3]).success).toBeFalsy()
  })

  test('Uint16Array', () => {
    let input = UINT16_MAX * 3 + 34
    let output = Uint16ArrayTransform.parse(input)
    expect(output).toHaveLength(4)
    expect(Uint16ArraySchema.safeParse(output).success).toBeTruthy()
    expect(Uint16ArraySchema.safeParse([0, 1, 2, 3]).success).toBeFalsy()
  })

  test('Uint32Array', () => {
    let input = UINT32_MAX * 3 + 34
    let output = Uint32ArrayTransform.parse(input)
    expect(output).toHaveLength(4)
    expect(Uint32ArraySchema.safeParse(output).success).toBeTruthy()
    expect(Uint32ArraySchema.safeParse([0, 1, 2, 3]).success).toBeFalsy()
  })

  test('Int8Array', () => {
    // Positive
    let input = INT8_MAX * 3 + 34
    let output = Int8ArrayTransform.parse(input)
    expect(output).toHaveLength(4)
    expect(Int8ArraySchema.safeParse(output).success).toBeTruthy()
    expect(Int8ArraySchema.safeParse([-3, -2, -1, 0, 1, 2, 3]).success).toBeFalsy()
    // Negative
    input = INT8_MIN * 2 - 34
    output = Int8ArrayTransform.parse(input)
    expect(output).toHaveLength(3)
    expect(Int8ArraySchema.safeParse(output).success).toBeTruthy()
    expect(Int8ArraySchema.safeParse([-3, -2, -1, 0, 1, 2, 3]).success).toBeFalsy()
  })

  test('Int16Array', () => {
    // Positive
    let input = INT16_MAX * 3 + 34
    let output = Int16ArrayTransform.parse(input)
    expect(output).toHaveLength(4)
    expect(Int16ArraySchema.safeParse(output).success).toBeTruthy()
    expect(Int16ArraySchema.safeParse([-3, -2, -1, 0, 1, 2, 3]).success).toBeFalsy()
    // Negative
    input = INT16_MIN * 2 - 34
    output = Int16ArrayTransform.parse(input)
    expect(output).toHaveLength(3)
    expect(Int16ArraySchema.safeParse(output).success).toBeTruthy()
    expect(Int16ArraySchema.safeParse([-3, -2, -1, 0, 1, 2, 3]).success).toBeFalsy()
  })

  test('Int32Array', () => {
    // Positive
    let input = INT32_MAX * 3 + 34
    let output = Int32ArrayTransform.parse(input)
    expect(output).toHaveLength(4)
    expect(Int32ArraySchema.safeParse(output).success).toBeTruthy()
    expect(Int32ArraySchema.safeParse([-3, -2, -1, 0, 1, 2, 3]).success).toBeFalsy()
    // Negative
    input = INT32_MIN * 2 - 34
    output = Int32ArrayTransform.parse(input)
    expect(output).toHaveLength(3)
    expect(Int32ArraySchema.safeParse(output).success).toBeTruthy()
    expect(Int32ArraySchema.safeParse([-3, -2, -1, 0, 1, 2, 3]).success).toBeFalsy()
  })
})