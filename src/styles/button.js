import color from 'chroma-js'

import { colorsFont, colorPlates, buttonHeight, buttonFontSize } from './variables'

const buttons = Object.keys(buttonHeight).map(key => {
  const value = buttonHeight[key]
  return `
    .btn-${key}{
      height: ${value}rem;
      line-height: 1;
      font-size:${buttonFontSize[key]}px;
    }
  `
}).join('')

const buttonThemes = Object.keys(colorPlates).map(key => {
  const value = colorPlates[key]
  return `
    .btn-${key}{
      background-color: ${value};
      border-color: ${color(value).darken(0.5)};
    }
    .btn-${key}:hover {
      background-color: ${color(value).darken(0.8)};
    }
    .btn-${key}:active {
      background-color: ${color(value).darken(0.8)};
    }
    .btn-${key}:focus {
      background-color: ${color(value).darken(0.8)};
    }
  `
}).join('')

export default `
button {
  border: none;
}
[class^=btn] {
  color: ${colorsFont.primaryTextReverse};
  margin: 10px 20px;
  display: inline-block;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
}
[class^=btn] span {
  margin-right: 5px;
}
${buttons}
${buttonThemes}
.btn-default {
  color: ${colorsFont.primaryText};
  background-color: ${colorPlates.default};
}
.btn-default:hover {
  background-color: ${color(colorPlates.default).darken(0.3)};
}
`
