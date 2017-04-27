import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends PureComponent {
  render() {
    const i18nMessage = this.props.data
    return (
      <div className="navbar">
        <span className="icon-huashixin navbar-toggle navbar-toggle-left" />
        <span className="icon-huashixin navbar-toggle navbar-toggle-right" />
        <div className="ctn navbar-ctn">
          <div className="navbar-nav navbar-left">
            <a className="" href="http://ms5.me">
              <span className="icon-huashixin" />
            </a>
            <Link to="/">{i18nMessage.home}</Link>
            <div className="navbar-sub">
              <Link to="/styles">{i18nMessage.style}</Link>
              <div className="navbar-sub-nav">
                <Link to="/styles">Typography</Link>
                <div className="navbar-sub">
                  <Link to="/styles">{i18nMessage.style}</Link>
                  <div className="navbar-sub-nav">
                    <Link to="/styles">Typography1</Link>
                    <Link to="/styles">Header1</Link>
                    <Link to="/styles">Divide1r</Link>
                    <Link to="/styles">Text1</Link>
                  </div>
                </div>
                <Link to="/styles">Divider</Link>
                <Link to="/styles">Text</Link>
              </div>
            </div>
            <Link to="/elements">{i18nMessage.element}</Link>
            <Link to="/components">{i18nMessage.component}</Link>
          </div>
          <div className="navbar-nav navbar-right">
            <input type="text" />
            <Link to="/about">关于</Link>
            <a href="/">Github</a>
            <a href="https://ms5.me">ms5.me</a>
          </div>
        </div>
      </div>
    )
  }
}
