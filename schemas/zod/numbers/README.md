# @SchemasJS/zod-numbers

[![build](https://github.com/crisconru/schemasjs/actions/workflows/zod-numbers.yml/badge.svg)](https://github.com/crisconru/schemasjs/actions/workflows/zod-numbers.yml)

Zod schemas for numbers and their types.

## Numbers

| Data                     | Schema          | Type        | Values                        |
|:------------------------:|:---------------:|:-----------:| :---------------------------: |
| **Unsigned integers**    |                 |             |                               |
| Unsigned integer 8 bits  | `Uint8Schema`   | `Uint8`     | `0` to `255`                  |
| Unsigned integer 16 bits | `Uint16Schema`  | `Uint16`    | `0` to `65535`                |
| Unsigned integer 32 bits | `Uint32Schema`  | `Uint32`    | `0` to `4294967295`           |
| Unsigned Big Integer     | `BigUintSchema` | `BigUint`   | `0` to `2^64-1`               |
| **Integers**             |                 |             |                               |
| Integer 8 bits           | `Int8Schema`    | `Int8`      | `-128` to `127`               |
| Integer 16 bits          | `Int16Schema`   | `Int16`     | `-32768` to `32767`           |
| Integer 32 bits          | `Int32Schema`   | `Int32`     | `-2147483648` to `2147483647` |
| Big Integer              | `BigIntSchema`  | built-in TS | `-2^63` to `2^63-1`           |
| **Floats**               |                 |             |                               |
| Float 32 bit             | `Float32Schema` | `Float32`   | `-3.4e38` to `3.4e38`         |
| Float 64 bit             | `Float64Schema` | `Float64`   | `-1.8e308` to `1.8e308`       |

## Typed Arrays

It contains typed arrays too.

| Data                     | Schema                 | Type        | Values                        |
|:------------------------:|:----------------------:|:-----------:| :---------------------------: |
| **Unsigned integers**    |                        |             |                               |
| Unsigned integer 8 bits  | `Uint8ArraySchema`     | built-in TS | `0` to `255`                  |
| Unsigned integer 16 bits | `Uint16ArraySchema`    | built-in TS | `0` to `65535`                |
| Unsigned integer 32 bits | `Uint32ArraySchema`    | built-in TS | `0` to `4294967295`           |
| Unsigned Big Integer     | `BigUint64ArraySchema` | built-in TS | `0` to `2^64-1`               |
| **Integers**             |                        |             |                               |
| Integer 8 bits           | `Int8ArraySchema`      | built-in TS | `-128` to `127`               |
| Integer 16 bits          | `Int16ArraySchema`     | built-in TS | `-32768` to `32767`           |
| Integer 32 bits          | `Int32ArraySchema`     | built-in TS | `-2147483648` to `2147483647` |
| Big Integer              | `BigInt64ArraySchema`  | built-in TS | `-2^63` to `2^63-1`           |
| **Floats**               |                        |             |                               |
| Float 32 bit             | `Float32ArraySchema`   | built-in TS | `-3.4e38` to `3.4e38`         |
| Float 64 bit             | `Float64ArraySchema`   | built-in TS | `-1.8e308` to `1.8e308`       |

There is a cool feature: It is added if you introduce a number, it could be transformed into an typed array. For example:

```typescript
import { Uint8ArraTransform, Uint16ArrayTransform } from @schemasjs/zod-numbers

const num = 256

console.log(Uint8ArrayTransform.parse(num)) // [255, 1]
console.log(Uint16ArrayTransform.parse(num)) // [256]
```

| Data                     | Schema                    | Type        | Values                        |
|:------------------------:|:-------------------------:|:-----------:| :---------------------------: |
| **Unsigned integers**    |                           |             |                               |
| Unsigned integer 8 bits  | `Uint8ArrayTransform`     | built-in TS | `0` to `255`                  |
| Unsigned integer 16 bits | `Uint16ArrayTransform`    | built-in TS | `0` to `65535`                |
| Unsigned integer 32 bits | `Uint32ArrayTransform`    | built-in TS | `0` to `4294967295`           |
| Unsigned Big Integer     | `BigUint64ArrayTransform` | built-in TS | `0` to `2^64-1`               |
| **Integers**             |                           |             |                               |
| Integer 8 bits           | `Int8ArrayTransform`      | built-in TS | `-128` to `127`               |
| Integer 16 bits          | `Int16ArrayTransform`     | built-in TS | `-32768` to `32767`           |
| Integer 32 bits          | `Int32ArrayTransform`     | built-in TS | `-2147483648` to `2147483647` |
| Big Integer              | `BigInt64ArrayTransform`  | built-in TS | `-2^63` to `2^63-1`           |
| **Floats**               |                           |             |                               |
| Float 32 bit             | `Float32ArrayTransform`   | built-in TS | `-3.4e38` to `3.4e38`         |
| Float 64 bit             | `Float64ArrayTransform`   | built-in TS | `-1.8e308` to `1.8e308`       |
