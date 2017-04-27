import React from 'react'
import katex from 'katex'

export default ({ tex = 'x' }: { tex?: string }) =>
  <div dangerouslySetInnerHTML={{ __html: katex.renderToString(tex) }} />
