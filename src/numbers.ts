import { number, integer, minValue, maxValue, Input, bigint } from 'valibot'

// INTEGERS
export const INT8_MIN = -Math.pow(2, 7)
export const INT8_MAX = -INT8_MIN - 1
export const Int8Schema = number(
  'It should be a number',
  [
    integer('It should be an integer number'),
    minValue(INT8_MIN, `It should be greater than ${INT8_MIN - 1}`),
    maxValue(INT8_MAX, `It should be less than ${INT8_MAX + 1}`)
  ]
)
export type Int8 = Input<typeof Int8Schema>


export const INT16_MIN = -Math.pow(2, 16)
export const INT16_MAX = -INT16_MIN - 1
export const Int16Schema = number(
  'It should be a number',
  [
    integer('It should be an integer number'),
    minValue(INT16_MIN, `It should be greater than ${INT16_MIN - 1}`),
    maxValue(INT16_MAX, `It should be less than ${INT16_MAX + 1}`)
  ]
)
export type Int16 = Input<typeof Int16Schema>

export const INT32_MIN = -Math.pow(2, 32)
export const INT32_MAX = -INT32_MIN - 1
export const Int32Schema = number(
  'It should be a number',
  [
    integer('It should be an integer number'),
    minValue(INT32_MIN, `It should be greater than ${INT32_MIN - 1}`),
    maxValue(INT32_MAX, `It should be less than ${INT32_MAX + 1}`)
  ]
)
export type Int32 = Input<typeof Int32Schema>

export const BigIntSchema = bigint()

// UNSIGNED INTEGERS
export const UINT_MIN = 0

export const UINT8_MAX = Math.pow(2, 8) - 1
export const Uint8Schema = number(
  'It should be a number',
  [
    integer('It should be an integer number'),
    minValue(0, 'It should be greater than 0'),
    maxValue(UINT8_MAX, `It should be less than ${UINT8_MAX + 1}`)
  ]
)
export type Uint8 = Input<typeof Uint8Schema>

export const UINT16_MAX = Math.pow(2, 16) - 1
export const Uint16Schema = number(
  'It should be a number',
  [
    integer('It should be an integer number'),
    minValue(0, 'It should be greater than 0'),
    maxValue(UINT16_MAX, `It should be less than ${UINT16_MAX + 1}`)
  ]
)
export type Uint16 = Input<typeof Uint16Schema>

export const UINT32_MAX = Math.pow(2, 32) - 1
export const Uint32Schema = number(
  'It should be a number',
  [
    integer('It should be an integer number'),
    minValue(0, 'It should be greater than 0'),
    maxValue(UINT32_MAX, `It should be less than ${UINT32_MAX + 1}`)
  ]
)
export type Uint32 = Input<typeof Uint32Schema>

export const BigUintSchema = bigint([minValue(0n, 'It should be greater than 0')])
export type BigUint = Input<typeof BigUintSchema>
