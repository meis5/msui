import React from 'react'

export default ({ lang = 'javascript', code = 'const a = 0' }: { lang?: string, code?: string }) =>
  <pre><code className={`hljs ${lang}`} dangerouslySetInnerHTML={{ __html: hljs.highlight(lang, code).value }} /></pre>
