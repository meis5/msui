/* eslint no-underscore-dangle: off */
import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import createStore from './store/createStore'
import Container from './containers'

import i18n from './i18n'

const state = {
  app: {},
  i18n,
}
const store = createStore(state)

class Root extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Container />
        </BrowserRouter>
      </Provider>
    )
  }
}

export default Root
