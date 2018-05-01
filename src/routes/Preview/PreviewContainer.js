import { connect } from 'react-redux'
import PreviewArea from './PreviewArea'

import { setSelectedPoster, setSimilar } from '../../reducers/media'

const mapStatetoProps = state => {
  return {
    SelectedPoster: state.media.SelectedPoster,
    Similar: state.media.Similar
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSelectedPoster: selectedPoster => {
      dispatch(setSelectedPoster(selectedPoster))
    },
    setSimilar: similar => {
      dispatch(setSimilar(similar))
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(PreviewArea)
