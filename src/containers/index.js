import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Router from '../routes/Router.jsx'

import { updateLocale } from '../store/modules/i18n'

const mapStateToProps = state => ({
  app: state.app,
  i18n: state.i18n,
})

export default withRouter(connect(mapStateToProps, {
  updateLocale,
})(Router))
