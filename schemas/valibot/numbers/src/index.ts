import * as v from 'valibot'

// UNSIGNED INTEGERS
export const UnsignedIntegerSchema = v.number('It should be a number', [v.integer('It should be an integer'), v.minValue(0, 'It should be greater than 0')])
export type UnsignedInteger = v.Input<typeof UnsignedIntegerSchema>

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

// INTEGERS
export const IntegerSchema = v.number('It should be a number', [v.integer('It should be an integer')])
export type Integer = v.Input<typeof IntegerSchema>

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

// FLOATS
export const FLOAT32_MIN = -3.4e38
export const FLOAT32_MAX = -FLOAT32_MIN
export const Float32Schema = v.number([v.minValue(FLOAT32_MIN, `It should be greater than or equal to ${FLOAT32_MIN}`), v.maxValue(FLOAT32_MAX, `It should be less than or equal to ${FLOAT32_MAX}`)])
export type Float32 = v.Input<typeof Float32Schema>

export const FLOAT64_MIN = -1.8e308
export const FLOAT64_MAX = -FLOAT64_MIN
export const Float64Schema = v.number([v.minValue(FLOAT64_MIN, `It should be greater than or equal to ${FLOAT64_MIN}`), v.maxValue(FLOAT64_MAX, `It should be less than or equal to ${FLOAT64_MAX}`)])
export type Float64 = v.Input<typeof Float64Schema>
// TYPED ARRAYS
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

export const Uint8ArraySchema = v.instance(Uint8Array)
export const Uint8ArrayTransform = v.transform(UnsignedIntegerSchema, (input: number) => Uint8Array.from(passToArray(input, UINT_MIN, UINT8_MAX)))

export const Uint16ArraySchema = v.instance(Uint16Array)
export const Uint16ArrayTransform = v.transform(UnsignedIntegerSchema, (input: number) => Uint16Array.from(passToArray(input, UINT_MIN, UINT16_MAX)))

export const Uint32ArraySchema = v.instance(Uint32Array)
export const Uint32ArrayTransform = v.transform(UnsignedIntegerSchema, (input: number) => Uint32Array.from(passToArray(input, UINT_MIN, UINT32_MAX)))

export const BigUint64ArraySchema = v.instance(BigUint64Array)

export const Int8ArraySchema = v.instance(Int8Array)
export const Int8ArrayTransform = v.transform(IntegerSchema, (input: number) => Int8Array.from(passToArray(input, INT8_MIN, INT8_MAX)))

export const Int16ArraySchema = v.instance(Int16Array)
export const Int16ArrayTransform = v.transform(IntegerSchema, (input: number) => Int16Array.from(passToArray(input, INT16_MIN, INT16_MAX)))

export const Int32ArraySchema = v.instance(Int32Array)
export const Int32ArrayTransform = v.transform(IntegerSchema, (input: number) => Int32Array.from(passToArray(input, INT32_MIN, INT32_MAX)))

export const BigInt64ArraySchema = v.instance(BigInt64Array)

export const Float32ArraySchema = v.instance(Float32Array)
export const Float32ArrayTransform = v.transform(v.number(), (input: number) => Float32Array.from(passToArray(input, FLOAT32_MIN, FLOAT32_MAX)))

export const Float64ArraySchema = v.instance(Float64Array)
export const Float64ArrayTransform = v.transform(v.number(), (input: number) => Float64Array.from(passToArray(input, FLOAT64_MIN, FLOAT64_MAX)))
