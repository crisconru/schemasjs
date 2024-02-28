import { z } from 'zod'

// UNSIGNED INTEGERS
export const UnsignedIntegerSchema = z.number().int('It should be an integer').nonnegative('It should be greater than 0')
export type UnsignedInteger = z.infer<typeof UnsignedIntegerSchema>

export const UINT_MIN = 0

export const UINT8_MAX = Math.pow(2, 8) - 1
export const Uint8Schema = UnsignedIntegerSchema.max(UINT8_MAX, `It should be less than ${UINT8_MAX + 1}`)
export type Uint8 = z.infer<typeof Uint8Schema>

export const UINT16_MAX = Math.pow(2, 16) - 1
export const Uint16Schema = UnsignedIntegerSchema.max(UINT16_MAX, `It should be less than ${UINT16_MAX + 1}`)
export type Uint16 = z.infer<typeof Uint16Schema>

export const UINT32_MAX = Math.pow(2, 32) - 1
export const Uint32Schema = UnsignedIntegerSchema.max(UINT32_MAX, `It should be less than ${UINT32_MAX + 1}`)
export type Uint32 = z.infer<typeof Uint32Schema>

export const BigUintSchema = z.bigint().nonnegative('It should be greater than 0n')
export type BigUint = z.infer<typeof BigUintSchema>

// INTEGERS
export const IntegerSchema = z.number().int('It should be an integer')
export type Integer = z.infer<typeof IntegerSchema>

export const INT8_MIN = -Math.pow(2, 7)
export const INT8_MAX = -INT8_MIN - 1
export const Int8Schema = IntegerSchema
  .min(INT8_MIN, `It should be greater than ${INT8_MIN - 1}`)
  .max(INT8_MAX, `It should be less than ${INT8_MAX + 1}`)
export type Int8 = z.infer<typeof Int8Schema>

export const INT16_MIN = -Math.pow(2, 16)
export const INT16_MAX = -INT16_MIN - 1
export const Int16Schema = IntegerSchema
  .min(INT16_MIN, `It should be greater than ${INT16_MIN - 1}`)
  .max(INT16_MAX, `It should be less than ${INT16_MAX + 1}`)
export type Int16 = z.infer<typeof Int16Schema>

export const INT32_MIN = -Math.pow(2, 32)
export const INT32_MAX = -INT32_MIN - 1
export const Int32Schema = IntegerSchema
  .min(INT32_MIN, `It should be greater than ${INT32_MIN - 1}`)
  .max(INT32_MAX, `It should be less than ${INT32_MAX + 1}`)
export type Int32 = z.infer<typeof Int32Schema>

export const BigIntSchema = z.bigint()

// FLOATS
export const NumberSchema = z.number()

export const FLOAT32_MIN = -3.4e38
export const FLOAT32_MAX = -FLOAT32_MIN
export const Float32Schema = NumberSchema
  .min(FLOAT32_MIN, `It should be greater than or equal to ${FLOAT32_MIN}`)
  .max(FLOAT32_MAX, `It should be less than or equal to ${FLOAT32_MAX}`)
export type Float32 = z.infer<typeof Float32Schema>

export const FLOAT64_MIN = -1.8e308
export const FLOAT64_MAX = -FLOAT64_MIN
export const Float64Schema = NumberSchema
  .min(FLOAT64_MIN, `It should be greater than or equal to ${FLOAT64_MIN}`)
  .max(FLOAT64_MAX, `It should be less than or equal to ${FLOAT64_MAX}`)
export type Float64 = z.infer<typeof Float64Schema>

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

export const Uint8ArraySchema = z.instanceof(Uint8Array)
export const Uint8ArrayTransform = UnsignedIntegerSchema.transform((input: number) => Uint8Array.from(passToArray(input, UINT_MIN, UINT8_MAX)))

export const Uint16ArraySchema = z.instanceof(Uint16Array)
export const Uint16ArrayTransform = UnsignedIntegerSchema.transform((input: number) => Uint16Array.from(passToArray(input, UINT_MIN, UINT16_MAX)))

export const Uint32ArraySchema = z.instanceof(Uint32Array)
export const Uint32ArrayTransform = UnsignedIntegerSchema.transform((input: number) => Uint32Array.from(passToArray(input, UINT_MIN, UINT32_MAX)))

export const BigUint64ArraySchema = z.instanceof(BigUint64Array)

export const Int8ArraySchema = z.instanceof(Int8Array)
export const Int8ArrayTransform = IntegerSchema.transform((input: number) => Int8Array.from(passToArray(input, INT8_MIN, INT8_MAX)))

export const Int16ArraySchema = z.instanceof(Int16Array)
export const Int16ArrayTransform = IntegerSchema.transform((input: number) => Int16Array.from(passToArray(input, INT16_MIN, INT16_MAX)))

export const Int32ArraySchema = z.instanceof(Int32Array)
export const Int32ArrayTransform = IntegerSchema.transform((input: number) => Int32Array.from(passToArray(input, INT32_MIN, INT32_MAX)))

export const BigInt64ArraySchema = z.instanceof(BigInt64Array)

export const Float32ArraySchema = z.instanceof(Float32Array)
export const Float32ArrayTransform = NumberSchema.transform((input: number) => Float32Array.from(passToArray(input, FLOAT32_MIN, FLOAT32_MAX)))

export const Float64ArraySchema = z.instanceof(Float64Array)
export const Float64ArrayTransform = NumberSchema.transform((input: number) => Float64Array.from(passToArray(input, FLOAT64_MIN, FLOAT64_MAX)))
