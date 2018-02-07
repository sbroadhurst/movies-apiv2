import { connect } from 'react-redux'

import TestComponent from './TestComponent'

const mapStatetoProps = state => {
  return {
    message: state.test.message
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStatetoProps, mapDispatchToProps)(TestComponent)
