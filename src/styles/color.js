import { colorPlates } from './variables'

export default Object.keys(colorPlates).map(v => `.cl-${v}{background-color:${colorPlates[v]}}.bg-${v}{background-color:${colorPlates[v]}}`).join('')
