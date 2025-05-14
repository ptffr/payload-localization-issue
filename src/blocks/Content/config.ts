import type { Block, Field } from 'payload'

import { CallToAction } from '../CallToAction/config'

const columnFields: Field[] = [
  {
    type: 'blocks',
    name: 'layout',
    // Making this localized does not solve the error message
    // "InvalidConfiguration: The table pages has multiple blocks with slug cta, but the schemas do not match. One is localized, but another is not. Block schemas of the same name must match exactly."
    // localized: true,
    blocks: [CallToAction]
  }
]

export const Content: Block = {
  slug: 'content',
  interfaceName: 'ContentBlock',
  fields: [
    {
      name: 'columns',
      type: 'array',
      fields: columnFields,
    },
  ],
}
