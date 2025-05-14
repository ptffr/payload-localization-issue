# Payload Localization Issue

This project demonstrates how PayloadCMS + Postgres fails to work with nested blocks if localization is enabled

## Steps to reproduce

1. `pnpm install`
2. `pnpm payload migrate:create`
3. Payload throws an error
```
InvalidConfiguration: The table pages has multiple blocks with slug cta, but the schemas do not match. One is localized, but another is not. Block schemas of the same name must match exactly.
```

Relevant bits to look at in code

```js
// src\collections\Pages\index.ts
{
  fields: [
    {
      name: 'layout',
      type: 'blocks',
      localized: true,
      blocks: [
        CallToAction,
        Content, // This is where the issue occurs because Content also contains the CallToAction block
        MediaBlock,
        Archive,
        FormBlock,
      ],
      required: true,
    },
  ],
  label: 'Content',
}

// src\blocks\Content\config.ts
{
  type: 'blocks',
  name: 'layout',
  blocks: [CallToAction]
}
```