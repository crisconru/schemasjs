import * as v from 'valibot'

export const passToArray = (value: number, min: number, max: number): number[] => {
  let array: number[] = []
  let num: number = value
  if (num > 0) {
    while (num > max) {
      array.push(max)
      num -= max
    }
  } else if (num < 0) {
    while (num < min) {
      array.push(min)
      num -= min
    }
  }
  array.push(num)
  return array
}

// INTEGERS
const IntegerSchema = v.number('It should be a number', [v.integer('It should be an integer')])

export const INT8_MIN = -Math.pow(2, 7)
export const INT8_MAX = -INT8_MIN - 1
export const Int8Schema = v.number(
  'It should be a number',
  [
    v.integer('It should be an integer number'),
    v.minValue(INT8_MIN, `It should be greater than ${INT8_MIN - 1}`),
    v.maxValue(INT8_MAX, `It should be less than ${INT8_MAX + 1}`)
  ]
)
export type Int8 = v.Input<typeof Int8Schema>
export const Int8ArraySchema = v.transform(IntegerSchema, (input) => Int8Array.from(passToArray(input, INT8_MIN, INT8_MAX)))

export const INT16_MIN = -Math.pow(2, 16)
export const INT16_MAX = -INT16_MIN - 1
export const Int16Schema = v.number(
  'It should be a number',
  [
    v.integer('It should be an integer number'),
    v.minValue(INT16_MIN, `It should be greater than ${INT16_MIN - 1}`),
    v.maxValue(INT16_MAX, `It should be less than ${INT16_MAX + 1}`)
  ]
)
export type Int16 = v.Input<typeof Int16Schema>
export const Int16ArraySchema = v.transform(IntegerSchema, (input) => Int16Array.from(passToArray(input, INT16_MIN, INT16_MAX)))


export const INT32_MIN = -Math.pow(2, 32)
export const INT32_MAX = -INT32_MIN - 1
export const Int32Schema = v.number(
  'It should be a number',
  [
    v.integer('It should be an integer number'),
    v.minValue(INT32_MIN, `It should be greater than ${INT32_MIN - 1}`),
    v.maxValue(INT32_MAX, `It should be less than ${INT32_MAX + 1}`)
  ]
)
export type Int32 = v.Input<typeof Int32Schema>

export const BigIntSchema = v.bigint()

// UNSIGNED INTEGERS
const UnsignedIntegerSchema = v.number('It should be a number', [v.integer('It should be an integer'), v.minValue(0, 'It should be greater than 0')])

export const UINT_MIN = 0

export const UINT8_MAX = Math.pow(2, 8) - 1
export const Uint8Schema = v.number(
  'It should be a number',
  [
    v.integer('It should be an integer number'),
    v.minValue(0, 'It should be greater than 0'),
    v.maxValue(UINT8_MAX, `It should be less than ${UINT8_MAX + 1}`)
  ]
)
export type Uint8 = v.Input<typeof Uint8Schema>

export const UINT16_MAX = Math.pow(2, 16) - 1
export const Uint16Schema = v.number(
  'It should be a number',
  [
    v.integer('It should be an integer number'),
    v.minValue(0, 'It should be greater than 0'),
    v.maxValue(UINT16_MAX, `It should be less than ${UINT16_MAX + 1}`)
  ]
)
export type Uint16 = v.Input<typeof Uint16Schema>

export const UINT32_MAX = Math.pow(2, 32) - 1
export const Uint32Schema = v.number(
  'It should be a number',
  [
    v.integer('It should be an integer number'),
    v.minValue(0, 'It should be greater than 0'),
    v.maxValue(UINT32_MAX, `It should be less than ${UINT32_MAX + 1}`)
  ]
)
export type Uint32 = v.Input<typeof Uint32Schema>

export const BigUintSchema = v.bigint([v.minValue(0n, 'It should be greater than 0')])
export type BigUint = v.Input<typeof BigUintSchema>
