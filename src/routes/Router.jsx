import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Katex from 'components/Katex'
import Highlight from 'components/Highlight'
import Program from 'components/Program'

import styles from '../styles'
import Navbar from './Navbar'

import HomeRoute from './home'
import StylesRoute from './styles'
import ElementsRoute from './elements'
import ComponentsRoute from './components'


export default class Router extends Component {
  render() {
    const navbarData = this.props.i18n[this.props.i18n.locale].ui.navbar

    return (
      <div>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <Navbar data={navbarData} />
        <div className="ctn">
          <button
            className="btn-md btn-default"
            onClick={() => {
              this.props.updateLocale('zh-CN')
            }}
          >中文
          </button>
          <button
            className="btn-md btn-primary"
            onClick={() => {
              this.props.updateLocale('en-US')
            }}
          >英文
          </button>
        </div>

        <Route exact path="/" component={HomeRoute} />
        <Route exact path="/styles" component={StylesRoute} />
        <Route path="/elements" component={ElementsRoute} />
        <Route exact path="/components" component={ComponentsRoute} />
      </div>
    )
  }
}
