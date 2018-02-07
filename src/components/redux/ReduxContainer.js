import { connect } from 'react-redux'

import ReduxComponent from './ReduxComponent'

import { init } from '../../reducers/test'

const mapStatetoProps = state => {
  return {
    message: state.test.message
  }
}

const mapDispatchToProps = dispatch => {
  return {
    init: message => {
      dispatch(init(message))
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ReduxComponent)
