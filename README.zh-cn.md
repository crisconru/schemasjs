# SchemasJS

> **其他语言：** [English](README.md) · [Español](README.es.md)

> **注意：** 本中文内容由 AI 辅助翻译。我不懂中文，但希望这些内容能对你有所帮助。如有不妥之处，敬请谅解。

<img src="https://codeberg.org/crisconru/schemasjs/raw/branch/main/logos/schemajs-logo-light.svg" alt="SchemasJS" width="180" align="left" style="margin-right: 1.5rem" />

**SchemasJS** 之于运行时验证模式，正如 [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped) 之于 TypeScript 类型定义——一个按验证库组织的、社区维护的即用型模式集合。

选择你的验证器（Valibot、Zod 等），即可获得针对常见需求的生产就绪模式——数字类型、二进制协议、类型化数组等。每个模式都附带其推导的 TypeScript 类型，一次编写即可获得完整的类型安全。

<br clear="left" />

---

## 软件包

### Valibot

| 包 | 描述 | 版本 |
| :-----: | :---------: | :-----: |
| [`@schemasjs/valibot-numbers`](./schemas/valibot/numbers/README.md) | C 风格数字模式（Uint8、Int32、Float64…） | [![npm](https://img.shields.io/npm/v/%40schemasjs%2Fvalibot-numbers)](https://www.npmjs.com/package/@schemasjs/valibot-numbers) |

### Zod

| 包 | 描述 | 版本 |
| :-----: | :---------: | :-----: |
| [`@schemasjs/zod-numbers`](./schemas/zod/numbers/README.md) | C 风格数字模式（Uint8、Int32、Float64…） | [![npm](https://img.shields.io/npm/v/%40schemasjs%2Fzod-numbers)](https://www.npmjs.com/package/@schemasjs/zod-numbers) |

### 工具

| 包 | 描述 | 版本 |
| :-----: | :---------: | :-----: |
| [`@schemasjs/validator`](./validator/README.md) | 验证器无关的包装器——一次编写基于模式的逻辑，之后可替换底层验证器 | [![npm](https://img.shields.io/npm/v/%40schemasjs%2Fvalidator)](https://www.npmjs.com/package/@schemasjs/validator) |

---

## 为什么选择 @schemasjs/validator？

模式与其验证库紧密耦合——Valibot 的模式不能用于 Zod，反之亦然。`@schemasjs/validator` 提供了一个带有统一 API（`is()`、`parse()`、`safeParse()`）的轻量抽象层，使你的应用程序代码无需了解底层使用的是哪个验证器。定义你的模式，包装它们，即可在不触及业务逻辑的情况下切换验证器。

```ts
import { ValibotValidator, ZodValidator } from '@schemasjs/validator'

// 无论底层使用哪个验证器，这些调用行为完全一致
const uint8 = ValibotValidator<Uint8>(Uint8Schema)
uint8.is(255)   // true
uint8.parse(42) // 42
```
