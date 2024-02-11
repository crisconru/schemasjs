# @schemas/numbers

Valibot schemas for numbers and their types.

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

In this 