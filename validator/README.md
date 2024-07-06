# @SchemasJS/validator

[![version](https://img.shields.io/npm/v/%40schemasjs%2Fvalidator)](https://img.shields.io/npm/v/%40schemasjs%2Fvalidator) [![Bundle size minified](https://img.shields.io/bundlephobia/min/%40schemasjs/validator/latest)](https://bundlephobia.com/package/@schemasjs/validator) [![build](https://github.com/crisconru/schemasjs/actions/workflows/validator.yml/badge.svg)](https://github.com/crisconru/schemasjs/actions/workflows/validator.yml)

If you love type validators like Zod or Valibot, probably you load a ton of logic
inside schemas. If suddenly you wanted to swap from one type validator to another,
the migration would be a pain.
This package try to minimize this problem.

Validator is an opinionated API to work with your favourites schemas coming from Zod or Valibot. You can use your preferred schemas in and if you need to swap to another
it won't be a problem.

At this moment it is only supported Zod and Valibot.

## How to use Validator

1. In your schemas file, import the proper Validator that you need and create your
validator for each schema.

    ```typescript
    // Zod
    import { z } from 'zod'
    import { ZodValidator } from '@schemasjs/validator'
    import { Uint8Schema as ZodUint8Schema, type Uint8 } from '@schemasjs/zod-numbers'

    const Uint8Schema = new ZodValidator<Uint8>()
    const ZodEmailSchema = z.string().email()
    type Email = z.infer<typeof ZodEmailSchema>
    const EmailSchema = ZodValidator<Email>(ZodEmailSchema)
    // Valibot
    import * as v from 'valibot'
    import { ValibotValidator } from '@schemasjs/validator'
    import { Uint8Schema as ValibotUint8Schema, type Uint8 } from '@schemasjs/valibot-numbers'

    const Uint8Schema = ValibotValidator<Uint8>()
    const ValibotEmailSchema = v.pipe(v.string(), v.email())
    type Email = v.InferInput<typeof ValibotEmailSchema>
    const EmailSchema = ValibotValidator<Email>(ValibotEmailSchema)
    ```

2. Then use it in your code instead your schemas, and that's all.

    ```typescript
    const myEmail = 'foo@bar.com'

    console.log(EmailSchema.is(myEmail) ? 'Valid email' : 'Invalid email') // 'Valid email'

    const parsedEmail = EmailSchema.parse(myEmail) // 'foo@bar.com'

    const parsed = EmailSchema.safeParse(myEmail)

    console.log(parsed.success ? parsed.data : parsed.errors) // 'foo@bar.com'
    ```

## Validator API

```typescript
is: (data: any) => boolean

parse: (data: any) => T

safeParse: (data: any) => SafeParse<T>
```

It is a tiny API based on Zod API + `is` Valibot function API.

`safeParse` return

```typescript
interface SafeParse<T> {
  success: boolean
  data?: T
  errors?: string[]
}
```
