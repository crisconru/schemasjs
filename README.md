> **🏠 This is the publish-only mirror of [SchemasJS](https://codeberg.org/crisconru/schemasjs).**
>
> Source code, issues, pull requests, and discussions live on Codeberg. This GitHub repository exists only to publish npm packages via OIDC trusted publishing (which doesn't currently support Codeberg / Woodpecker).

# SchemasJS

<img src="https://codeberg.org/crisconru/schemasjs/raw/branch/main/logos/schemajs-logo-light.svg" alt="SchemasJS" width="180" align="left" style="margin-right: 1.5rem" />

**SchemasJS** is to runtime validation schemas what [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) is to TypeScript type definitions — a collection of ready-to-use, community-maintained schemas organized by validator library.

Choose your validator (Valibot, Zod, etc.) and get production-ready schemas for common needs — numeric types, binary protocols, typed arrays, and more. Each schema ships with its inferred TypeScript type, so you write once and get full type safety.

<br clear="left" />

---

## Packages

### Valibot

| Package | Description | Version |
| :-----: | :---------: | :-----: |
| [`@schemasjs/valibot-numbers`](./schemas/valibot/numbers/README.md) | C-style numeric schemas (Uint8, Int32, Float64…) | [![npm](https://img.shields.io/npm/v/%40schemasjs%2Fvalibot-numbers)](https://www.npmjs.com/package/@schemasjs/valibot-numbers) |

### Zod

| Package | Description | Version |
| :-----: | :---------: | :-----: |
| [`@schemasjs/zod-numbers`](./schemas/zod/numbers/README.md) | C-style numeric schemas (Uint8, Int32, Float64…) | [![npm](https://img.shields.io/npm/v/%40schemasjs%2Fzod-numbers)](https://www.npmjs.com/package/@schemasjs/zod-numbers) |

### Utilities

| Package | Description | Version |
| :-----: | :---------: | :-----: |
| [`@schemasjs/validator`](./validator/README.md) | Validator-agnostic wrapper — write schema-based logic once, swap the underlying validator later | [![npm](https://img.shields.io/npm/v/%40schemasjs%2Fvalidator)](https://www.npmjs.com/package/@schemasjs/validator) |

---

## Why @schemasjs/validator?

Schemas are tightly coupled to their validator library — a Valibot schema won't work with Zod, and vice versa. `@schemasjs/validator` provides a thin abstraction layer with a unified API (`is()`, `parse()`, `safeParse()`) so your application code doesn't need to know which validator sits underneath. Define your schemas, wrap them, and swap validators without touching business logic.

```ts
import { ValibotValidator, ZodValidator } from '@schemasjs/validator'

// These work identically regardless of the underlying validator
const uint8 = ValibotValidator<Uint8>(Uint8Schema)
uint8.is(255)   // true
uint8.parse(42) // 42
```
