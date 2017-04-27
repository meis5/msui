import { colorsFont, fontSize, fontFamilies } from './variables'

export default `
html {
  box-sizing: border-box;
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -ms-overflow-style: scrollbar;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  font-size: 16px;
}
*, *::before, *::after {
  box-sizing: inherit;
}
@at-root {
  @-ms-viewport {width: device-width}
}
body {
  margin: 0;
  font-family: ${fontFamilies.common};
  font-size: ${fontSize.md}px;
  font-weight: normal;
  line-height: 1.618;
  color: ${colorsFont.primaryText};
  background-color: #fff,
}
[tabindex="-1"]:focus {
  outline: none !important;
}
h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: .5rem;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
}
ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}


a {
  color: ${colorsFont.link};
  text-decoration: none;
}
a:hover {
  color: ${colorsFont.linkHover};
  text-decoration: underline;
}

`
