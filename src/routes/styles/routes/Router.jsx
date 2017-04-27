import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Katex from 'components/Katex'
import Highlight from 'components/Highlight'

import ColorRoute from './Color.jsx'
import ColorPlateRoute from './ColorPlate.jsx'

export default class Router extends Component {
  render() {

    const code = `
          <button className="btn-xs btn-primary"><span className="icon-huashixin"></span>梅花</button>
          <button className="btn-sm btn-primary"><span className="icon-huashixin"></span>梅花</button>
          <button className="btn-md btn-primary"><span className="icon-huashixin"></span>梅花</button>
          <button className="btn-lg btn-primary"><span className="icon-huashixin"></span>梅花</button>
          <button className="btn-xl btn-primary"><span className="icon-huashixin"></span>梅花</button>

          <button className="btn-md  btn-default"><span className="icon-huashixin"></span>梅花</button>
          <button className="btn-md  btn-primary"><span className="icon-huashixin"></span>梅花</button>
          <button className="btn-md  btn-secondary"><span className="icon-huashixin"></span>梅花</button>
          <button className="btn-md  btn-info"><span className="icon-huashixin"></span>梅花</button>
          <button className="btn-md  btn-warning"><span className="icon-huashixin"></span>梅花</button>
          <button className="btn-md  btn-danger"><span className="icon-huashixin"></span>梅花</button>
          <button className="btn-md  btn-success"><span className="icon-huashixin"></span>梅花</button>
    `
    return (
      <div>
        <div className="ctn">
          <Highlight lang="html" code={code} />

          <button className="btn-xs btn-primary"><span className="icon-huashixin"></span>梅花</button>
          <button className="btn-sm btn-primary"><span className="icon-huashixin"></span>梅花</button>
          <button className="btn-md btn-primary"><span className="icon-huashixin"></span>梅花</button>
          <button className="btn-lg btn-primary"><span className="icon-huashixin"></span>梅花</button>
          <button className="btn-xl btn-primary"><span className="icon-huashixin"></span>梅花</button>

          <button className="btn-md  btn-default"><span className="icon-huashixin"></span>梅花</button>
          <button className="btn-md  btn-primary"><span className="icon-huashixin"></span>梅花</button>
          <button className="btn-md  btn-secondary"><span className="icon-huashixin"></span>梅花</button>
          <button className="btn-md  btn-info"><span className="icon-huashixin"></span>梅花</button>
          <button className="btn-md  btn-warning"><span className="icon-huashixin"></span>梅花</button>
          <button className="btn-md  btn-danger"><span className="icon-huashixin"></span>梅花</button>
          <button className="btn-md  btn-success"><span className="icon-huashixin"></span>梅花</button>
        </div>

        <Route exact path="/styles" component={ColorRoute} />
        <Route exact path="/styles/color" component={ColorRoute} />
        <Route path="/styles/colorPlate" component={ColorPlateRoute} />
      </div>
    )
  }
}
