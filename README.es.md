# SchemasJS

> **Leer en otros idiomas:** [English](README.md) · [简体中文](README.zh-cn.md)

<img src="https://codeberg.org/crisconru/schemasjs/raw/branch/main/logos/schemajs-logo-light.svg" alt="SchemasJS" width="180" align="left" style="margin-right: 1.5rem" />

**SchemasJS** es para los schemas de validación en tiempo de ejecución lo que [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) es para las definiciones de tipo TypeScript — una colección de schemas listos para usar, mantenidos por la comunidad y organizados por biblioteca de validación.

Elige tu validador (Valibot, Zod, etc.) y obtén schemas listos para producción para necesidades comunes — tipos numéricos, protocolos binarios, arrays tipados y más. Cada schema incluye su tipo TypeScript inferido, para que escribas una vez y tengas seguridad de tipos completa.

<br clear="left" />

---

## Paquetes

### Valibot

| Paquete | Descripción | Versión |
| :-----: | :---------: | :-----: |
| [`@schemasjs/valibot-numbers`](./schemas/valibot/numbers/README.md) | Schemas numéricos estilo C (Uint8, Int32, Float64…) | [![npm](https://img.shields.io/npm/v/%40schemasjs%2Fvalibot-numbers)](https://www.npmjs.com/package/@schemasjs/valibot-numbers) |

### Zod

| Paquete | Descripción | Versión |
| :-----: | :---------: | :-----: |
| [`@schemasjs/zod-numbers`](./schemas/zod/numbers/README.md) | Schemas numéricos estilo C (Uint8, Int32, Float64…) | [![npm](https://img.shields.io/npm/v/%40schemasjs%2Fzod-numbers)](https://www.npmjs.com/package/@schemasjs/zod-numbers) |

### Utilidades

| Paquete | Descripción | Versión |
| :-----: | :---------: | :-----: |
| [`@schemasjs/validator`](./validator/README.md) | Wrapper agnóstico al validador — escribe lógica basada en schemas una vez, cambia el validador subyacente después | [![npm](https://img.shields.io/npm/v/%40schemasjs%2Fvalidator)](https://www.npmjs.com/package/@schemasjs/validator) |

---

## ¿Por qué @schemasjs/validator?

Los schemas están estrechamente acoplados a su biblioteca de validación — un schema de Valibot no funciona con Zod, y viceversa. `@schemasjs/validator` proporciona una fina capa de abstracción con una API unificada (`is()`, `parse()`, `safeParse()`) para que tu código de aplicación no necesite saber qué validador hay debajo. Define tus schemas, envuélvelos y cambia de validador sin tocar la lógica de negocio.

```ts
import { ValibotValidator, ZodValidator } from '@schemasjs/validator'

// Estos funcionan de forma idéntica independientemente del validador subyacente
const uint8 = ValibotValidator<Uint8>(Uint8Schema)
uint8.is(255)   // true
uint8.parse(42) // 42
```
