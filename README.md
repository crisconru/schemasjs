# SchemasJS

> **The source of truth for SchemasJS lives on [Codeberg](https://codeberg.org/crisconru/schemasjs).**
>
> This GitHub repository is a publish proxy. It exists only so the npm packages can be published via [npm trusted publishing](https://docs.npmjs.com/trusted-publishers), which currently supports GitHub Actions, GitLab CI, and CircleCI — but not Codeberg / Woodpecker.

SchemasJS is a collection of runtime validation schemas (with TypeScript type inference) for JavaScript validators like [Valibot](https://valibot.dev) and [Zod](https://zod.dev). Inspired by DefinitelyTyped, but for schemas instead of types.

## Where to find things

| What | Where |
|---|---|
| Source code | [codeberg.org/crisconru/schemasjs](https://codeberg.org/crisconru/schemasjs) |
| Issues | [Codeberg issues](https://codeberg.org/crisconru/schemasjs/issues) |
| Pull requests | [Codeberg pull requests](https://codeberg.org/crisconru/schemasjs/pulls) |
| Releases | [Codeberg releases](https://codeberg.org/crisconru/schemasjs/releases) |

## Packages published from here

- [`@schemasjs/validator`](https://www.npmjs.com/package/@schemasjs/validator) — validator-agnostic abstraction over Valibot / Zod
- [`@schemasjs/valibot-numbers`](https://www.npmjs.com/package/@schemasjs/valibot-numbers) — C-style numeric schemas for Valibot
- [`@schemasjs/zod-numbers`](https://www.npmjs.com/package/@schemasjs/zod-numbers) — C-style numeric schemas for Zod

## How publishing works

1. A tag matching `<package>-v<semver>` is pushed on Codeberg (e.g. `validator-v2.0.3`).
2. Woodpecker CI runs the tests and build on Codeberg.
3. On success, Woodpecker fires a `repository_dispatch` event to this GitHub repository.
4. The [`publish.yml`](.github/workflows/publish.yml) workflow clones the Codeberg source at that tag and runs `npm publish` via OIDC trusted publishing — no npm tokens involved.

The workflow can also be triggered manually via the GitHub Actions UI (`workflow_dispatch`) as a fallback, providing the package short name and tag as inputs.

## Issues, PRs, contributions

Please file everything on Codeberg. Issues are disabled here so that nothing gets lost in the wrong tracker.

## License

MIT — see [LICENSE](LICENSE).
